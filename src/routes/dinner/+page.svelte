<script lang="ts">
	import { asset } from "$app/paths"
	import FooterNav from "$lib/components/FooterNav.svelte"
	import MenuButton from "$lib/components/MenuButton.svelte"
	import PeopleSearch from "$lib/components/PeopleSearch.svelte";
    import { pages } from "$lib/data/pages"

    let dinnerSeatingDiv: HTMLDivElement

    function scrollToDinnerSeating() {
        dinnerSeatingDiv.scrollIntoView({ behavior: "smooth", block: "start" })
    }
</script>

<MenuButton name="Dinner" />

<div class="poster">
    <img src={asset("/dinner.png")} alt="">

    <div class="corner tl">
        <h2 class="corner-header">28</h2>
        <span>August</span>
    </div>
    <div class="corner tr">
        <h2 class="corner-header">20</h2>
        <span>Start</span>
    </div>
    <div class="corner bl">
        <h2 class="corner-header">3</h2>
        <span>Courses</span>
    </div>
    <div class="corner br">
        <h2 class="corner-header">1</h2>
        <span>Night</span>
    </div>

    <div class="center">
        <h2 class="center-header">The night is ours</h2>
        <p>Hosted by Fanny Taube Persson<br>& Adam Wiberg</p>
    </div>
</div>

<h4>Bring your best outfit & dancing shoes - leave the rest to us.</h4>

<div class="hosts">
    <h2>Hosted by</h2>
    <div class="people">
        <figure>
            <img src={asset("/fata.png")} alt="">
            <label for="">Fanny Taube Persson</label>
        </figure>
        <figure>
            <img src={asset("/adwi.png")} alt="">
            <label for="">Adam Wiberg</label>
        </figure>
    </div>
</div>

<div class="seating" bind:this={dinnerSeatingDiv}>
    <PeopleSearch template="dinner" callback={scrollToDinnerSeating} />
</div>

<FooterNav previousPage={pages[3]} nextPage={pages[5]}/>

<style>
    .poster {
        position: relative;
        height: 475px;
        margin-top: 40px;

        display: flex; justify-content: center;

        img {
            position: absolute;

            object-fit: cover; width: 100%; height: 100%;
        }
    }

    .corner {
        position: absolute;

        display: flex;

        &.tl {
            inset: -10px auto auto 10px;

            flex-direction: column;

            span {
                font-size: 14px;
                margin-top: -10px;
            }
        }

        &.tr {
            inset: -10px 10px auto auto;

            flex-direction: column; align-items: end;

            span {
                font-size: 14px;
                margin-top: -10px;
                margin-right: 4px;
            }
        }

        &.bl {
            inset: auto auto -10px 10px;

            flex-direction: column-reverse;

            span {
                font-size: 14px;
                margin-bottom: -20px;
            }
        }

        &.br {
            inset: auto 10px -10px auto;

            flex-direction: column-reverse; align-items: end;

            span {
                font-size: 14px;
                margin-bottom: -20px;
                margin-right: 4px;
            }
        }
    }

    .corner-header {
        font-size: 98px;
    }

    .center {
        margin-top: 185px; z-index: 1;

        display: flex; flex-direction: column; align-items: center; gap: 16px;

        p {
            line-height: 120%; text-align: center;
        }
    }

    .center-header {
        font-size: 56px; line-height: 90%;
    }

    h2 {
        font-size: 64px;
    }

    h4 {
        margin: 64px 0px;
        font-size: 32px;
        text-align: center;
        line-height: 110%;
    }

    .hosts {
        display: flex; flex-direction: column; gap: 20px;

    }
    
    .people {
        display: grid; grid-template-columns: repeat(2, 1fr); gap: 6px; align-items: start; justify-items: center;
    }

    figure {
        min-width: 100px; max-width: 250px;

        display: flex; flex-direction: column; gap: 6px;

        img {
            height: auto; width: 100%;
            border-radius: 4px;
            object-fit: cover;
        }

        label {
            font-size: 12px;
            text-align: center;
        }
    }

    .seating {
        margin-top: 48px;
    }    
</style>