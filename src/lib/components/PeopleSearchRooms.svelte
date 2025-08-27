<script lang="ts">
	import { asset } from "$app/paths"
	import { queryMatchesName } from "$lib/utils/peopleSearch"
	import { onMount } from "svelte"
	import { slide } from "svelte/transition"

    type Template = "room" | "dinner"
    
    type Person = {
        id: string
        name: string
        roomMate: string
        table: string
    }

    interface Props {
        template: Template
        callback: () => void
    }

	let { template = "room", callback }: Props = $props()

    let isSearching = $state(true)
    let people = $state<Person[]>([])
    let searchString = $state<string>("")
    
    let matches: Person[] = $derived.by(() => {
        if (searchString == ""  || !people) return []
        const allMatches = people.filter(person => queryMatchesName(person.name, searchString))
        return allMatches.filter(person => person.roomMate !== "-")
    })

	function onfocus() {
		isSearching = true
		callback()
	}
    
	function onblur() {
		isSearching = false
	}

    async function fetchPeople() {
        try {
            const response = await fetch(asset("/people.json"))
            if (!response.ok) throw new Error("failed to fetch people.json")

            const data: Omit<Person, "id">[] = await response.json()
            people = data.map(person => ({
                ...person,
                id: crypto.randomUUID()
            }))
        } catch (e) {
            // noop
        }
    }

    onMount(fetchPeople)
</script>

<label class="searchbar" class:active={isSearching}>
    <img src={asset("/search.svg")} alt="" class="icon">    
    <input type="text" bind:value={searchString} placeholder="Enter your name here" {onfocus} {onblur}>
</label>

{#if matches.length > 0}
<div class="results" transition:slide={{ duration: 120 }} onintroend={() => callback()}>
    {#each matches.slice(0, 5) as match}
    {#if template === "room"}
    <p class="result"><span class="match-person">{match.name}</span> + {match.roomMate}</p>
    {:else}
    <p class="result"><span class="match-person">{match.name}</span> - Table {match.table}</p>
    {/if}

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
    
    p, span { font-size: 14px;  }
    p {
        color: var(--secondary-color);
        overflow: hidden; text-overflow: ellipsis; text-wrap: nowrap;
    }

</style>