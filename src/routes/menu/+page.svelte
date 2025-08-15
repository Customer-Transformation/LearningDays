<script lang="ts">
	import NavButton from "$lib/components/NavButton.svelte";
    import { pages } from "$lib/data/pages"
</script>

<menu>
    {#each pages as page}
    {#if (page.name !== "Menu" && page.name !== "Welcome")}
    <NavButton page={page}/>
    {/if}
    {/each}
</menu>

<style>
    menu {
        display: flex; flex-direction: column;
    }
</style>