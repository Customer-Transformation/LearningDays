<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths"
</script>

<div class="container">
    <button onpointerdown={() => goto(resolve("/menu"))}>
        <span>Crew</span>
        <img src={asset("/arrow-down-right.png")} alt="">
    </button>
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

<style>
    .container {
        display: flex; flex-direction: column; gap: 40px;
    }

    button {
		width: 100%; height: 104px;
        border: none;
        background-color: transparent;
        border-top: .8px solid var(--primary-color);

		padding-top: 4px;
		display: flex; justify-content: space-between; align-items: flex-start;
        
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