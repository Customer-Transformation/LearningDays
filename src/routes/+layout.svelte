<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths"
	import { page } from "$app/state"
	import "../globalStyles.css"

	let { children } = $props()
</script>

<main class:welcome={page.route.id == "/"}>
	<header>
		<button onclick={() => goto(resolve("/"))}>
			<img src={asset("/logo.svg")} alt="">
		</button>
	</header>

	{@render children?.()}

	<footer class:welcome={page.route.id === "/"} class:menu={page.route.id === "/menu"} class:travel={page.route.id === "/travel"}>
		{#if page.route.id === "/"}
		<span>Designed & built by Customer Team MC</span>
		{:else}
		<p>
			Can't find what you're looking for?<br>
			Email us → <a href="mailto:se-fmlearningfscmc@kpmg.se">se-fmlearningfscmc@kpmg.se</a>
		</p>
		{/if}
	</footer>
</main>

<style>
	main { height: 100%; width: 100%; position: relative; padding: 60px 20px 0px 20px; background: #000; }
	main.welcome { background: var(--gradient); }
	header { position: absolute; inset: 0; height: 60px; padding: 20px; }
	button { width: 48px; height: 20px; background-color: transparent; }
	img { width: 100%; height: 100%; object-fit: cover; }
	footer { margin-top: 100px; margin-bottom: 100px; }
	footer.welcome { margin-top: 24px; margin-bottom: 0px; }
	footer.menu { margin-top: 37px; margin-bottom: 0px; }
	footer.travel { margin-bottom: 280px; }
	span, p, a { font-size: 12px; color: var(--secondary-color); font-style: italic; }
	a { color: var(--primary-color); }
</style>