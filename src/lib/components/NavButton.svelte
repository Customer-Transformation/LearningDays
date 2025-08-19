<script lang="ts">
    import { goto } from "$app/navigation"
	import { asset, resolve } from "$app/paths"
	import type { Page } from "$lib/data/pages";

    let { page = { name: "Welcome", link: "/welcome" } }: { page?: Page } = $props()
</script>

<button onpointerdown={() => goto(resolve(page.link as any))}>
    <span>{page.name}</span>
    <img src={asset("/arrow-down-right.svg")} alt="">
</button>

<style>
    button {
		width: 100%; height: 104px;
        border: none;
        background-color: transparent;
        border-bottom: .8px solid var(--primary-color);

		touch-action: manipulation;

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