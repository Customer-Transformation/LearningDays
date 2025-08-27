<script lang="ts">
	import { goto } from "$app/navigation"
	import { resolve } from "$app/paths"
</script>

<div class="container">
    <h1>LEARNING<br>DAYS</h1>
    <hr>
    <h2>SAVE THE<br>DATE</h2>
    <hr>
    <div class="info">
        <div class="left">
            <h3>THURSDAY<br>AUGUST 28, 2025<br><br>FRIDAY<br>AUGUST 29, 2025</h3>
        </div>
        <div class="right">
            <h3>
                SKOGSHEM & WIJK<br>
                HUSTEGAVÄGEN 1<br>
                LIDINGÖ<br>
                181 24<br>
                STOCKHOLM
            </h3>
        </div>
    </div>
    <button onclick={() => goto(resolve("/menu"))}>WHAT'S ON</button>
</div>

<style>
    .container {
        display: flex; flex-direction: column; gap: 12px;
    }

    h1, h2 {
        font-size: 110px;
        line-height: 74%;
    }

    h2 {
        color: var(--primary-color);
    }

    hr {
        height: .8px;
        background-color: #75778B;
    }

    .info {
        display: flex; justify-content: space-between;
    }

    h3 {
        font-size: 12px;
        line-height: 1.1;
    }

    .right {
        h3 {
            text-align: end;
        }
    }

    button {
        margin-top: 30px;
        height: 50px;
        background-color: var(--primary-color);
        border-radius: 4px;
        padding: 8px 10px;
        font-family: "Univers";
        font-size: 16px;
        font-weight: 700;
    }
</style>