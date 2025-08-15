<script lang="ts">
	import { goto } from "$app/navigation";
	import { asset, resolve } from "$app/paths"
</script>

<div class="container">
    <button onpointerdown={() => goto(resolve("/menu"))}>
        <span>Prep</span>
        <img src={asset("/arrow-down-right.png")} alt="">
    </button>

    <div class="welcome">
        <h3>Welcome to FSC and MC Learning Days</h3>
        <p>Two days. One mission. FSC and MC are joining forces to break silos, building bridges, and spart game-changing conversations.</p>
    </div>

    <div class="card">
        <img class="card-img" src={"https://picsum.photos/900"} alt="">
        <div class="fade"></div>
        
        <div class="card-info">
            <h3>Skogshem & Wijk</h3>
            <div class="info-figures">
                <figure>
                    <img src={asset("/favicon.svg")} alt="">
                    <span>28-29 August</span>
                </figure>
                <figure>
                    <img src={asset("/favicon.svg")} alt="">
                    <span>Hustegavägen 1, Lidingö</span>
                </figure>
            </div>
        </div>
        <button class="card-button">GETTING THERE</button>
    </div>

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
        <div class="bullet">
            <figure>
                <img class="icon" src={asset("/favicon.svg")} alt="">
                <h4>Festive dinner</h4>
            </figure>
            <p>Business formal clothes for the festive dinner in the evening</p>
        </div>

        <div class="bullet">
            <figure>
                <img class="icon" src={asset("/favicon.svg")} alt="">
                <h4>Conference</h4>
            </figure>
            <p>Clothes and shoes for two days</p>
        </div>

        <div class="bullet">
            <figure>
                <img class="icon" src={asset("/favicon.svg")} alt="">
                <h4>Pool / sauna</h4>
            </figure>
            <p>Swimwear if you want to use the hotel's outdoor pool or sauna</p>
        </div>
    </div>

    <figure class="rooms">
        <h3>Room Sharing</h3>
    </figure>
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

    .welcome {
        display: flex; flex-direction: column; gap: 10px;

    }

    h3 {
        font-size: 32px;
        letter-spacing: -.96px;
    }

    p {
        font-size: 16px;
        line-height: 120%;
    }

    .card {
        position: relative;
        height: 424px;
        border-radius: 8px;
        border: 1px solid #373946;

        padding: 20px 16px;
        
        .card-img {
            position: absolute; inset: 0;
            width: 100%; height: 100%;
            object-fit: cover;
            border-radius: 8px;
        }

        .card-info {
            position: relative;
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
        margin-top: 8px;
        display: flex; flex-direction: column; gap: 16px;
    }

    .bullet {
        display: flex; flex-direction: column; gap: 10px;
        
        figure {
            display: flex; gap: 10px;

            h4 {
                font-weight: 700;
                font-size: 16px;
            }
        }

        p {
            font-size: 16px;
        }
    }

    .icon {
        width: 24px; height: 24px;
    }

    .rooms {
        margin-top: 8px;
        height: 303px;
        border-radius: 8px;
        border: 1px solid #373946;
        background: linear-gradient(106deg, #16171F 0%, #000 100%);
        
        display: grid; place-items: center;
    }
</style>