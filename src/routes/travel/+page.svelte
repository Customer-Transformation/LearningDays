<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths"
	import BulletInfo from "$lib/components/BulletInfo.svelte";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import RoomFinder from "$lib/components/RoomFinder.svelte";
	import { pages } from "$lib/data/pages";

    let roomSharingDiv: HTMLDivElement

    function scrollToRoomSharing() {
        roomSharingDiv.scrollIntoView({ behavior: "smooth", block: "start" })
    }
</script>

<div class="container">
    <MenuButton name="Travel"/>

    <div class="welcome">
        <h3>Welcome to FSC and MC Learning Days</h3>
        <p>Two days. One mission. FSC and MC are joining forces to break silos, building bridges, and spart game-changing conversations.</p>
    </div>

    <div class="card">
        <img class="card-img" src={asset("/travel.png")} alt="">
        <div class="fade"></div>
        
        <div class="card-info">
            <h3 class="card-header">Skogshem & Wijk</h3>
            <div class="info-figures">
                <figure class="info-figure">
                    <img class="icon" src={asset("/calendar.svg")} alt="">
                    <span>28-29 August</span>
                </figure>
                <figure class="info-figure">
                    <img class="icon" src={asset("/marker.svg")} alt="">
                    <span>Hustegavägen 1, Lidingö</span>
                </figure>
            </div>
        </div>
        <button class="card-button" onpointerdown={() => goto(resolve("/travel/directions"))}>TRAVEL INFO</button>
    </div>

    <h2>General info</h2>

    <div class="info">
        <h3>Time reporting</h3>
        <p>96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p>
    </div>

    <div class="info">
        <h3>Meals</h3>
        <p>Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p>
    </div>

    <div class="info">
        <h3>Suggested pack list</h3>

        <BulletInfo 
            img={asset("/hanger.svg")} 
            header="Festive dinner" 
            body="Business formal clothes for the festive dinner in the evening"
        />

        <BulletInfo 
            img={asset("/hanger.svg")} 
            header="Conference" 
            body="Business casual clothes and shoes for two days"
        />

        <BulletInfo 
            img={asset("/hanger.svg")} 
            header="Pool / sauna" 
            body="Swimwear if you want to use the hotel's outdoor pool or sauna"
        />

        <BulletInfo 
            img={asset("/luggage.svg")} 
            header="Necessities" 
            body="Work computer and charger"
        />
    </div>

    
    <div bind:this={roomSharingDiv} class="rooms">
        <h2>Room sharing</h2>
        <p>Here you can find more information about your stay at Skogshem & Wijk.</p>
        <RoomFinder callback={scrollToRoomSharing}/>
    </div>
</div>

<FooterNav previousPage={pages[1]} nextPage={pages[3]}/>

<style>
    .welcome {
        margin-top: 40px;
        display: flex; flex-direction: column; gap: 10px;
    }

    h2 {
        margin-top: 48px;
        font-size: 64px;
    }

    h3 {
        font-size: 32px;
        line-height: 110%;
        letter-spacing: -.96px;
    }

    p {
        font-size: 16px;
        line-height: 120%;
    }

    .card {
        margin-top: 40px;

        position: relative;
        height: 424px;
        border-radius: 8px;
        border: 1px solid #373946;

        padding: 20px 16px;
        
        .card-img {
            position: absolute; inset: 0;
            width: 100%; height: 94%;
            object-fit: cover;
            border-radius: 8px;
        }

        .card-info {
            position: absolute;
            inset: auto auto 94px 16px;

            .info-figures {
                margin-top: 8px;
                display: flex; gap: 8px;
            }
        }
        
        .card-button {
            position: absolute;
            inset: auto auto 20px 16px;
            height: 50px; width: 186px;
            background-color: var(--primary-color);
            border-radius: 4px;
            font-weight: 700;
        }

        .card-header {
            font-size: 28px; font-weight: 700; line-height: 120%;
        }
    }
    
    .info-figure {
        display: flex; gap: 4px; align-items: center;

        span {
            font-size: 12px;
        }
    }
    
    .fade {
        border-radius: 8px;
        position: absolute;
        inset: 0;
        background: linear-gradient(0deg, #000 0%, #16171F 20%, rgba(22, 23, 31, 0.70) 30%, rgba(22, 23, 31, 0.00) 50%);
        pointer-events: none;
    }


    .info {
        margin-top: 32px;
        display: flex; flex-direction: column; gap: 16px;
    }

    .icon {
        width: 24px; height: 24px;
    }

    .rooms {
        margin-top: 48px;

        p {
            margin-top: 40px;
        }
    }
</style>