<script>
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";

	const activities = [
		"SHUFFLEBOARD",
		"HEATED OUTDOOR POOL",
		"SAUNAS",
		"GYM",
		"POOL TABLE",
		"PING PONG TABLE",
		"INDOOR MINI GOLF",
		"BOARD GAMES",
		"SEA ACCESS WITH PRIVATE PIERS",
		"AIR HOCKEY",
		"KUBB"

	]

</script>
<MenuButton name="Explore"/>

<div class="activities">
	<!-- {#each activities as activity}
	<h3>{activity}</h3>
	{/each} -->
</div>

<FooterNav previousPage={pages[4]} nextPage={pages[6]}/>

<style>
	.activities {
		display: flex; gap: 10px;
	}
	
	/* h3 {
		font-size: 32px;
	} */

	/* span {
		width: 6px; height: 6px; border-radius: 50%; background-color: white;
	} */
</style>