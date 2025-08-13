<script lang="ts">
	import { asset } from '$app/paths';
	let { data } = $props();
	const { events } = data;
</script>

<h2>Schedule</h2>
<img src={asset('/favicon.svg')} alt="">

<ul>
	{#each events as e}
		<li>{e.date} {e.time} — {e.title} @ {e.location}</li>
	{/each}
</ul>