<script lang="ts">
	import { resolve } from "$app/paths";
	let { children } = $props();
</script>

<nav>
	<!-- svelte-ignore a11y_consider_explicit_label -->
	<a href={resolve("/")}>Home</a>
	<a href={resolve("/contact")}>Contact</a>
	<a href={resolve("/schedule")}>Schedule</a>
</nav>
{@render children?.()}