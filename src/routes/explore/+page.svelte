<script>
	import { asset } from "$app/paths";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";

	const activities = [
		"SHUFFLEBOARD",
		"HEATED OUTDOOR POOL",
		"SAUNA",
		"GYM",
		"POOL TABLE",
		"PING PONG TABLE",
		"INDOOR MINI GOLF",
		"BOARD GAMES",
		"SEA ACCESS WITH PRIVATE PIERS",
		"AIR HOCKEY",
		"KUBB",
		"CORNHOLE",
		"BOULE",
		"GAME ROOM (DART, ARCADE GAMES, PS4, FLIPPER)",
		"OUTDOOR HOT TUB",
		"KARAOKE"
	]

</script>
<MenuButton name="Explore"/>

<div class="activities">
	{#each activities as activity}
	<span class="activity">{activity}</span>
	{/each}
</div>

<div class="images">
	<img src={asset("/Pool.png")} alt="">
	<img src={asset("/Bastu.png")} alt="">
	<img src={asset("/Mingle.png")} alt="">
	<img src={asset("/Gym.png")} alt="">
	<img src={asset("/Cornhole.png")} alt="">
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
		letter-spacing: -3%;
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
		transform: translateY(-50%);
	}

	.images {
		margin-top: 48px;

		display: flex; flex-direction: column; gap: 20px;
	}

	img {
		height: auto;
		border-radius: 8px;
		object-fit: cover;
	}

	p {
		margin-top: 48px;
	}
</style>