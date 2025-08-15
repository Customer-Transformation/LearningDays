<script lang="ts">
	import { goto } from "$app/navigation";
	import { resolve } from "$app/paths";
	import type { Page } from "$lib/data/pages";
    
    let { previousPage, nextPage }: { previousPage?: Page, nextPage?: Page } = $props()
</script>

<footer>
    <div>
        {#if previousPage}
        <button onpointerdown={() => goto(resolve(previousPage.link as any))}>L</button>
        <label for="">{previousPage.name}</label>
        {/if}
    </div>
    <div>
        {#if nextPage}
        <label for="">{nextPage.name}</label>
        <button onpointerdown={() => goto(resolve(nextPage.link as any))}>R</button>
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
        }
    }
</style>