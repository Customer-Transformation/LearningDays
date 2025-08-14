<script lang="ts">
	import { onNavigate } from "$app/navigation"
	import { resolve } from "$app/paths"
	import "../globalStyles.css"

	let { children } = $props();
	let isMenuShown = $state(false)
	onNavigate(() => {isMenuShown = false})
</script>

<header>
	<button onpointerdown={() => isMenuShown = true}>Menu</button>
	
	<nav style:display={isMenuShown ? "flex" : "none"}>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href={resolve("/")}>Home</a>
		<a href={resolve("/contact")}>Contact</a>
		<a href={resolve("/schedule")}>Schedule</a>
	</nav>
</header>

{@render children?.()}

<style>
	header {
		height: 32px;
		background-color: #222;
	}

	nav {
		position: fixed; inset: 0 auto auto 0;
		display: flex; flex-direction: column; gap: 8px;
		background-color: #222;
	}

	a {
		color: white;
	}
</style>