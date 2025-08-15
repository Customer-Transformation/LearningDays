<script lang="ts">
	import { asset } from "$app/paths"
	import FooterNav from "$lib/components/FooterNav.svelte"
	import MenuButton from "$lib/components/MenuButton.svelte"
    import { pages } from "$lib/data/pages"
</script>

<MenuButton name="Dinner" />

<div class="poster"></div>

<h3>Bring your best outfit & dancing shoes - leave the rest to us.</h3>

<div class="hosts">
    <h2>Hosted by</h2>
    <div class="people">
        <figure>
            <img src={asset("/favicon.svg")} alt="">
            <label for="">Carina Elgendahl</label>
        </figure>
        <figure>
            <img src={asset("/favicon.svg")} alt="">
            <label for="">Carina Elgendahl</label>
        </figure>
    </div>
</div>

<FooterNav previousPage={pages[3]} nextPage={pages[5]}/>

<style>
    .poster {
        height: 475px;
        background-color: var(--primary-color);
        margin-top: 40px;
    }

    h3 {
        margin: 64px 0px;
        font-size: 32px;
    }

    .hosts {
        display: flex; flex-direction: column; gap: 20px;
    }

    .people {
        display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px;
    }

    figure {
        display: flex; flex-direction: column; gap: 12px;

        img {
            width: 174px; height: 224px;
            border: 1px dotted;
            object-fit: cover;
        }

        label {
            font-size: 12px;
            text-align: center;
        }
    }

    
</style>