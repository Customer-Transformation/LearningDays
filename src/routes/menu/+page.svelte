<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths";

    const pages = [
        // { name: "welcome", link: "/" },
        // { name: "menu", link: "/menu" },
        { name: "Crew", link: "/crew" },
        { name: "Prep", link: "/prep" },
        { name: "Agenda", link: "/agenda" },
        { name: "Dinner", link: "/dinner" },
        { name: "Explore", link: "/explore" }
    ]
</script>

<menu>
    {#each pages as page}
    <button onpointerdown={() => goto(resolve(page.link as any))}>
		<span>{page.name}</span>
		<img src={asset("/arrow-down-right.png")} alt="">
	</button>
    {/each}
</menu>

<style>
    menu {
        display: flex; flex-direction: column;
    }
    
    button {
		width: 100%; height: 104px;
        border: none;
        background-color: transparent;
        border-bottom: .8px solid var(--primary-color);

		padding-bottom: 4px;
		display: flex; justify-content: space-between; align-items: flex-end;
    }

	span {
		font-size: 100px;
		text-align: start;
		line-height: 94px;
        color: var(--primary-color);
        font-family: "KPMGBold";
	}

	img {
		width: 40px; height: 40px;
	}
</style>