<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths"
	import { page } from "$app/state"
	import "../globalStyles.css"

	let { children } = $props()
</script>

<main class:welcome={page.route.id == "/"}>
	<header>
		<button onpointerdown={() => goto(resolve("/"))}>
			<img src={asset("/logo.svg")} alt="">
		</button>
	</header>

	{@render children?.()}

	<footer class:welcome={page.route.id === "/"} class:menu={page.route.id === "/menu"} class:travel={page.route.id === "/travel"}>
		<span>Designed & built by Customer Team MC</span>
	</footer>
</main>

<style>
	main { height: 100%; width: 100%; position: relative; padding: 60px 20px 0px 20px; background: #000; }
	main.welcome { background: var(--gradient); }
	header { position: absolute; inset: 0; height: 60px; padding: 20px; }
	button { width: 48px; height: 20px; background-color: transparent; }
	img { width: 100%; height: 100%; object-fit: cover; }
	footer { margin-top: 80px; margin-bottom: 75px; }
	footer.welcome { margin-top: 24px; margin-bottom: 0px; }
	footer.menu { margin-top: 37px; margin-bottom: 0px; }
	footer.travel { margin-bottom: 280px; }
	span { font-size: 12px; color: var(--secondary-color); font-style: italic; }
</style>