<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths"
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import NavButton from "$lib/components/NavButton.svelte";
	import { pages } from "$lib/data/pages";
</script>

<div class="container">
    <MenuButton name="Crew" />

    <div class="mc">
        <h3>MANAGEMENT CONSULTING</h3>
        <ul class="top">
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
        </ul>
        <ul class="bottom">
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
        </ul>
    </div>

    <div class="fs">
        <h3>FINANCIAL SERVICES</h3>
        <ul class="top">
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
        </ul>
        <ul class="bottom">
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
            <figure>
                <img src={asset("/favicon.svg")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
        </ul>
    </div>
</div>

<FooterNav previousPage={pages[5]}/>

<style>
    .container {
        display: flex; flex-direction: column; gap: 40px;
    }

    .mc, .fs {
        display: flex; flex-direction: column; gap: 20px;

        h3 {
            font-size: 16px;
        }

        ul {
            display: grid; grid-template-columns: repeat(3, 1fr);

            figure {
                display: flex; flex-direction: column; gap: 12px;

                img {
                    width: 115px; height: 144px;
                }

                label {
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
    }
</style>