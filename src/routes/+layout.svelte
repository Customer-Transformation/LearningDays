<script lang="ts">
	import { asset } from "$app/paths";
	import "../globalStyles.css"
	let { children } = $props();
</script>

<main>
	<header>
		<img src={asset("/favicon.svg")} alt="">
	</header>

	{@render children?.()}
</main>



<style>
	main { height: 100dvh; width: 100dvw; position: relative; padding-top: 80px; }
	header { position: absolute; inset: 0; height: 80px; padding: 20px; }
	img { width: 48px; height: 20px; object-fit: cover; }
</style>