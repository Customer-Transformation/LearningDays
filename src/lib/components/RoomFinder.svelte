<script lang="ts">
	import { asset } from "$app/paths"
	import { onMount } from "svelte";
	import { fade, fly, slide } from "svelte/transition";

    type Room = {
        id: string
        people: string[]
    }
    
    type Match = {
        person: string, room: string, others: string[]
    }
    
    let rooms = $state<Room[]>([])
    let isLoading = $state(true)
    let isSearching = $state(false)
    let searchString = $state<string>("")

    let matches: Match[] = $derived.by(() => {
        const q = searchString.trim().toLowerCase();
        if (!q) return [];

        return rooms.flatMap((r) => {
            // tag each person with their index so identical names remain distinguishable
            const indexed = r.people.map((fullName, idx) => ({ fullName, idx }));

            return indexed
                .filter(({ fullName }) => {
                    const [first = "", last = ""] = fullName.split(" ");
                    return (
                        first.toLowerCase().startsWith(q) ||
                        last.toLowerCase().startsWith(q)
                    );
                })
                .map(({ fullName, idx }) => ({
                    person: fullName,
                    room: r.id,
                    // exclude only the same *slot*, not the same string
                    others: r.people.filter((_, j) => j !== idx)
                }));
        });
    });

    async function fetchRooms() {
        isLoading = true

        try {
            const response = await fetch(asset("/rooms.json"))
            if (!response.ok) throw new Error("failed to load rooms")
            rooms = await response.json()
        } catch (e) {
            console.log(e)
        } finally {
            isLoading = false
        }
    }

    onMount(fetchRooms)
</script>

<div class="container" class:fixed={isSearching}>
    <div class="searchbar" class:active={isSearching}>
        <img src={asset("/calendar-07.png")} alt="" class="icon">    
        <input type="text" bind:value={searchString} placeholder="Enter your name here" onfocus={() => isSearching = true} onblur={() => isSearching = false}>
    </div>
    
    {#if matches.length > 0}
    <div class="results" transition:slide>
        {#each matches.slice(0, 5) as match}
        <p class="result"><span class="match-person">{match.person}</span> + {match.others}</p>
        {/each}
    </div>
    {/if}
</div>
    
<style>
    .container.fixed {
        position: fixed; inset: 0;
        background-color: black;

        padding: 60px 20px;
    }

    .searchbar {
        margin-top: 16px;
        width: 100%;
        height: 50px;
        outline: 1px solid var(--primary-color); border-radius: 4px;
        
        display: flex; align-items: center; gap: 10px;
        padding: 8px 10px;
        
    }

    .searchbar.active {
        outline: 2px solid var(--primary-color);
    }

    input {
        all: unset;
        font-family: "Univers";
        font-size: 16px;
        
        &::placeholder {
            color: white;
        }
    }

    .results {
        margin-top: 16px;

        outline: 2px solid var(--primary-color); border-radius: 4px;

        display: flex; flex-direction: column; gap: 10px;
        padding: 8px 10px;
    }
    
    p, span { font-size: 14px;  }
    p {
        color: var(--secondary-color);
        overflow: hidden; text-overflow: ellipsis; text-wrap: nowrap;
    }

</style>