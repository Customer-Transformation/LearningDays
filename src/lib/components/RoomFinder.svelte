<script lang="ts">
	import { asset } from "$app/paths"
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

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

        return rooms.flatMap(r =>
            r.people
                .filter(fullName => {
                    const [first = "", last = ""] = fullName.split(" ");
                    return (
                        first.toLowerCase().startsWith(q) ||
                        last.toLowerCase().startsWith(q)
                    );
                })
                .map(person => ({
                    person,
                    room: r.id,
                    others: r.people.filter(o => o !== person)
                }))
        );
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

<div class="searchbar" class:active={isSearching}>
    <img src={asset("/calendar-07.png")} alt="" class="icon">    
    <input type="text" bind:value={searchString} placeholder="Enter your name here" onfocus={() => isSearching = true}>
</div>

{#if matches.length > 0}
<div class="results" transition:slide>
    {#each matches as match}
    <p class="result">
        <span class="match-person">{match.person}</span> + <span class="match-other">{match.others}</span>
    </p>
    {/each}
</div>
{/if}

<style>
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

    .match-person { font-size: 14px; font-weight: 700; }
    .match-other { font-size: 12px; font-weight: 400; }

</style>