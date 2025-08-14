<script lang="ts">
	import { asset } from '$app/paths'
	import { onMount } from 'svelte'

	type Event = {
		slug: string
		title: string
		date: string
		time: string
		location: string
		description: string
	}

	let loading = $state(true)
	let error = $state<string | null>(null)
	let events = $state<Event[] | null>(null)

	async function fetchEvents() {
		loading = true
		error = null
		try {
			const response = await fetch(asset("/events.json"), { cache: "no-store" })
			if (!response.ok)
				throw new Error("Failed to fetch events")
			const data: Event[] = await response.json()
			events = data
		} catch (e) {
			error = e instanceof Error ? e.message : "unknown error"
		} finally {
			loading = false
		}
	}

	onMount(fetchEvents)
</script>

<h2>Schedule</h2>
<img src={asset('/favicon.svg')} alt="">

{#if loading}
<p>Loading...</p>
{/if}

{#if error}
<p>ERROR: {error}...</p>
{/if}

{#if events !== null}
<ul>
	{#each events as event}
	<li>
		<h2>{event.title}</h2>
		<p>{event.description}</p>
		<time>{event.date}</time>
	</li>
	{/each}
</ul>
{/if}