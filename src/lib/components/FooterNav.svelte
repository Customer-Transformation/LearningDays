<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths";
	import type { Page } from "$lib/data/pages";
    
    let { previousPage, nextPage }: { previousPage?: Page, nextPage?: Page } = $props()
</script>

<footer>
    <div>
        {#if previousPage}
        <button onclick={() => goto(resolve(previousPage.link as any))}>
            <img src={asset("/arrow-left.svg")} alt="">
        </button>
        <label for="">{previousPage.name}</label>
        {/if}
    </div>
    <div>
        {#if nextPage}
        <label for="">{nextPage.name}</label>
        <button onclick={() => goto(resolve(nextPage.link as any))}>
            <img class="right-arrow" src={asset("/arrow-left.svg")} alt="">
        </button>
        {/if}
    </div>
</footer>

<style>
    footer {
        margin-top: 60px;

        display: flex; justify-content: space-between;

        div {
            display: flex; gap: 14px; align-items: center;
        }

        button {
            width: 50px; height: 50px;
            border-radius: 50%;
            background-color: var(--primary-color);

            display: grid; place-items: center;
        }

        img {
            width: 40px; height: 40px;
        }

        .right-arrow {
            transform: rotate(180deg);
        }
    }
</style>