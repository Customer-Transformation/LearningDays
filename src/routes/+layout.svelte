<script lang="ts">
	import { asset } from "$app/paths"
	import { page } from "$app/state"
	import "../globalStyles.css"

	let { children } = $props()
</script>

<main class:welcome={page.url.pathname == "/"}>
	<header>
		<img src={asset("/logo.png")} alt="">
	</header>

	{@render children?.()}
</main>

<style>
	main { min-height: 100dvh; width: 100dvw; position: relative; padding: 80px 20px 80px 20px; background: #000; }
	main.welcome { background: var(--gradient); }
	header { position: absolute; inset: 0; height: 80px; padding: 20px; }
	img { width: 48px; height: 20px; object-fit: cover; }
</style>