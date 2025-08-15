<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths";
	import BulletInfo from "$lib/components/BulletInfo.svelte";
	import TransportBullet from "$lib/components/TransportBullet.svelte";


</script>

<div class="container">
    <button onpointerdown={() => goto(resolve("/prep"))}>
        <img src={asset("/arrow-down-right.png")} alt="">
    </button>

    <h2>Getting there</h2>

    <div class="intro">
        <p>We have arranged transportation from Skogshem & Wijk from Stockholm Cityterminal through bus. See the schedule for the arranged transportation below.</p>
        <p>If you prefer to arrange your own transport from Stockholm to Skogshem & Wijk, <strong>please let us know as soon as possible.</strong></p>
        <p>Email: se-fmlearningfscmc@kpmg.se</p>
    </div>

    <div class="bullet-container">
        <h3>From Stockholm</h3>
        <TransportBullet header="MEETING POINT" body="CITYTERMINALEN" />
        <TransportBullet header="DESTINATION" body="SKOGSHEM & WIJK" />
        <TransportBullet header="GATHER" body="09:45" note="Be early - bus leaves on time!" />
        <TransportBullet header="DEPARTURE" body="10:00" />
        <TransportBullet header="ARRIVAL" body="10:30" />
    </div>

    <div class="bullet-container">
        <h3>Return Trip</h3>
        <TransportBullet header="MEETING POINT" body="CITYTERMINALEN" />
        <TransportBullet header="MEETING POINT" body="CITYTERMINALEN" />
        <TransportBullet header="MEETING POINT" body="CITYTERMINALEN" />
        <TransportBullet header="MEETING POINT" body="CITYTERMINALEN" />
    </div>

    <div class="other">
        <h3>Traveling form other cities</h3>
        <BulletInfo img={asset("/favicon.svg")} header="Gothenburg / Malmö" body="The conference team will arrange your travel. You will receive your train tickets by email."/>
        <BulletInfo img={asset("/favicon.svg")} header="Riga / Jönköping" body="Arrange your own travel to Stockholm. You need to be there at Cityterminalen no later than 09:45 on Aug 28th."/>
    </div>
</div>

<style>
    button {
        width: 40px; height: 40px;
        background-color: transparent;
        border: .5px dotted;

        img {
            width: 100%;
        }
    }

    h2 {
        font-size: 64px;
        line-height: 100%;
    }

    .intro {
        margin-top: 40px;
        display: flex; flex-direction: column; gap: 16px;

        p {
            font-size: 16px;
        }
    }

    strong {
        color: var(--primary-color);
    }

    .bullet-container {
        margin-top: 48px;
        display: flex; flex-direction: column; gap: 20px;
    }

    h3 {
        font-size: 32px;
        line-height: 100%;
    }

    .other {
        margin-top: 48px;
        display: flex; flex-direction: column; gap: 16px;
    }
</style>