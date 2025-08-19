<script lang="ts">
	import { draw } from "svelte/transition";

    let { width = 48, height = 20 } = $props()

    let isVisible = $state(false)

    $effect(() => { isVisible = true})
</script>

{#if isVisible}
<svg width={width} height={height} viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<path in:draw|global d="M5.14298 6.90176H14.7814M4.48524 1.4375V3.07698M15.3126 1.4375V3.07678M18.5001 6.07678L18.5001 17.5625C18.5001 19.2194 17.157 20.5625 15.5001 20.5625H4.50012C2.84327 20.5625 1.50012 19.2194 1.50012 17.5625V6.07678C1.50012 4.41992 2.84327 3.07678 4.50012 3.07678H15.5001C17.157 3.07678 18.5001 4.41992 18.5001 6.07678Z" stroke="#4C00FF" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
{/if}
