<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths";

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
    <button onpointerdown={() => goto(resolve(page.link as any))}>
		<span>{page.name}</span>
		<img src={asset("/favicon.svg")} alt="">
	</button>
    {/each}
</menu>

<style>
    :global(main) {
        background-color: #000;
    }

    menu {
        padding: 0px 20px;
        display: flex; flex-direction: column;
    }
    
    button {
		width: 100%; height: 104px;
        border: none;
        background-color: transparent;
        border-bottom: 1px solid white;

		padding-bottom: 4px;
		display: flex; justify-content: space-between; align-items: end;
    }

	span {
		font-size: 88px;
		text-align: start;
		line-height: 88px;
        color: var(--primary-color);
        font-family: "KPMGBold";
	}

	img {
		width: 40px; height: 40px;
	}
</style>
