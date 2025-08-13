<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();
</script>

<main>
	<nav>
		<!-- svelte-ignore a11y_consider_explicit_label -->
		<a href="/">Home</a>
		<a href="/contact">Contact</a>
		<a href="/schedule">Schedule</a>
	</nav>
	<div>
		{@render children?.()}
	</div>
</main>

