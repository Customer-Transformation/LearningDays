<script lang="ts">
    import { goto } from "$app/navigation"
	import { asset, resolve } from "$app/paths"

    let { name }: { name: string} = $props()
</script>

<button onclick={() => goto(resolve("/menu"))}>
    <span>{name}</span>
    <img src={asset("/arrow-down-right.png")} alt="">
</button>

<style>
    button {
		width: 100%; height: 104px;
        border: none;
        background-color: transparent;
        border-top: .8px solid var(--primary-color);
    
        padding-top: 4px;
        display: flex; justify-content: space-between; align-items: flex-start;
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
        transform: rotate(180deg);
	}
</style>