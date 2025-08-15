<script lang="ts">
	import { goto } from "$app/navigation";
	import { resolve } from "$app/paths";

    const pages = [
        // { name: "welcome", link: "/" },
        // { name: "menu", link: "/menu" },
        { name: "crew", link: "/crew" },
        { name: "prep", link: "/prep" },
        { name: "agenda", link: "/agenda" },
        { name: "dinner", link: "/dinner" },
        { name: "explore", link: "/explore" }
    ]
</script>

<menu>
    {#each pages as page}
    <button onpointerdown={() => goto(resolve(page.link as any))}>{page.name}</button>
    {/each}
</menu>

<style>
    menu {
        height: 100dvh;
        background-color: #111;
        display: grid; grid-auto-rows: 1fr;
    }
    
    button {
        border: none;
        background-color: transparent;
        border-bottom: 2px solid white;
    }
</style>
