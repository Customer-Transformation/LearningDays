<script>
	import { asset } from "$app/paths";
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
	{#each activities as activity}
	<span class="activity">{activity}</span>
	{/each}
</div>

<div class="images">
	<img src={asset("/favicon.svg")} alt="">
	<img src={asset("/arrow-down-right.png")} alt="">
	<img src={asset("/favicon.svg")} alt="">
	<img src={asset("/favicon.svg")} alt="">
	<img src={asset("/favicon.svg")} alt="">
	<img src={asset("/favicon.svg")} alt="">
</div>

<p>If you want to do an activity that hasn’t already been set up, please go the the reception and they will help you get started.</p>

<FooterNav previousPage={pages[4]} nextPage={pages[6]}/>

<style>
	.activities {
		margin-top: 40px;
	}
	
	.activity {
		display: inline;
		font-size: 32px;
	}

	.activity:not(:last-child)::after{
		content:"";
		display:inline-block;        /* real, stylable circle */
		width: 6px;
		height: 6px;
		border-radius: 50%;
		background: white;
		vertical-align: middle;       /* align with text */
		margin: 0 10px;  /* control spacing */
	}

	.images {
		display: flex; flex-direction: column;
	}

	img {
		height: 100%; width: fit-content;
	}

	p {
		margin-top: 48px;
	}
</style>