<script lang="ts">
	import { onNavigate } from "$app/navigation"
	import { resolve } from "$app/paths"
	import "../globalStyles.css"

	let { children } = $props();
	let isMenuShown = $state(false)

	function onpointerdown() {
		isMenuShown = !isMenuShown
	}

	onNavigate(() => {isMenuShown = false})
</script>

{@render children?.()}



<footer>
	<nav class:hidden={!isMenuShown}>
		<a href={resolve("/")}>Home</a>
		<a href={resolve("/contact")}>Contact</a>
		<a href={resolve("/schedule")}>Schedule</a>
	</nav>
	<button class:active={isMenuShown} {onpointerdown}>+</button>
</footer>

<style>
	footer {
		position: fixed;
		inset: auto 1rem 1rem auto;
	}

	nav {
		display: flex; flex-direction: column; gap: 12px;
		padding-bottom: 12px;
		transition: all 200ms;
	}

	.hidden {
		transform: translateY(20%);
		opacity: 0;
		pointer-events: none;
	}

	a {
		color: white;
	}

	button, a {
		width: 64px; height: 64px;
		border-radius: 50%;
		background-color: rgb(99, 21, 172);
		border: none;
		color: white;
		text-align: center;
	}

	button {
		font-size: 2rem;
		transition: 200ms;
	}

	button.active {
		transform: rotate(-45deg);
	}
</style>