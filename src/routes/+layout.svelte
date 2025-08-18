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

	<footer>
		<span>Designed & built by Customer Team MC</span>
	</footer>
</main>

<style>
	main { min-height: 100dvh; width: 100dvw; position: relative; padding: 80px 20px 0px 20px; background: #000; }
	main.welcome { background: var(--gradient); }
	header { position: absolute; inset: 0; height: 80px; padding: 20px; }
	img { width: 48px; height: 20px; object-fit: cover; }
	footer { margin-top: 40px; margin-bottom: 75px; }
	span { font-size: 12px; color: var(--secondary-color); font-style: italic; }
</style>