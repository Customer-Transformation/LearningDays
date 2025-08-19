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
        <ul>
            <figure>
                <img src={asset("/cael.png")} alt="">
                <label for="">Carina Elgendahl</label>
            </figure>
            <figure>
                <img src={asset("/daka.png")} alt="">
                <label for="">David Kåverud</label>
            </figure>
            <figure>
                <img src={asset("/nifo.png")} alt="">
                <label for="">Nicole Fogelgren Broberg</label>
            </figure>
        </ul>
        <ul>
            <figure>
                <img src={asset("/elbe.png")} alt="">
                <label for="">Ellen Bergkrans</label>
            </figure>
            <figure>
                <img src={asset("/emis.png")} alt="">
                <label for="">Emil Isaksson Torgilsman</label>
            </figure>
        </ul>
    </div>

    <div class="fs">
        <h3>FINANCIAL SERVICES</h3>
        <ul>
            <figure>
                <img src={asset("/stva.png")} alt="">
                <label for="">Stefan Varnelid</label>
            </figure>
            <figure>
                <img src={asset("/caev.png")} alt="">
                <label for="">Carl Evenbom</label>
            </figure>
            <figure>
                <img src={asset("/lial.png")} alt="">
                <label for="">Lina Almbladh</label>
            </figure>
        </ul>
        <ul>
            <figure>
                <img src={asset("/lime.png")} alt="">
                <label for="">Linda Melander</label>
            </figure>
            <figure>
                <img src={asset("/nama.png")} alt="">
                <label for="">Natalie Mattsson</label>
            </figure>
        </ul>
    </div>

    <div class="ct">
        <h3>DESIGN & DEV TEAM (MC)</h3>
        <ul>
            <figure>
                <img src={asset("/roda.png")} alt="">
                <label for="">Robin Dafnäs</label>
            </figure>
            <figure>
                <img src={asset("/zipe.png")} alt="">
                <label for="">Zihan Persson</label>
            </figure>
            <figure>
                <img src={asset("/albe.png")} alt="">
                <label for="">Alfred Berg</label>
            </figure>
        </ul>
    </div>
</div>

<FooterNav previousPage={pages[5]}/>

<style>
    .container {
        display: flex; flex-direction: column; gap: 40px;
    }

    .mc, .fs, .ct {
        display: flex; flex-direction: column; gap: 20px;

        h3 {
            font-size: 16px;
        }

        ul {
            display: grid; grid-template-columns: repeat(3, 1fr); gap: 4px;
            max-width: 100%;

            figure {
                min-width: 100px; max-width: 140px;

                display: flex; flex-direction: column; gap: 12px; align-items: center;

                img {
                    height: auto; width: 100%;
                    border-radius: 4px;
                    object-fit: cover;
                    object-position: top;
                }

                label {
                    font-size: 12px;
                    text-align: center;
                }
            }
        }
    }
</style>