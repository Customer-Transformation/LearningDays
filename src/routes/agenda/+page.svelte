<script lang="ts">
	import { asset } from "$app/paths";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";
	import { onMount } from "svelte";

    type Item = {
        time: string
        place: string
        activity: string
    }

    let loading = $state(true)
    let scheduleThursday = $state<Item[]>([])
    let scheduleFriday = $state<Item[]>([])

    async function fetchSchedules() {
        loading = true

        try {
            const response = await fetch(asset("/scheduleThursday.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleThursday = await response.json()
        } catch (e) {

        } 

        try {
            const response = await fetch(asset("/scheduleFriday.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleFriday = await response.json()
        } catch (e) {

        } finally {
            loading = false
        }
    }

    onMount(fetchSchedules)
</script>

<MenuButton name="Agenda"/>

<div class="table-container">
    <table>
        <caption>THURSDAY 28TH</caption>
        <thead>
            <tr>
                <th>Time</th>
                <th>Activity</th>
            </tr>
        </thead>
        <tbody>
            {#each scheduleThursday as item}
            <tr>
                <th>{item.time}</th>
                <td>{item.activity}</td>
            </tr>
            {/each}
        </tbody>
    </table>
    
    <table>
        <caption>FRIDAY 29TH</caption>
        <thead>
            <tr>
                <th>Time</th>
                <th>Place</th>
            </tr>
        </thead>
        <tbody>
            {#each scheduleFriday as item}
            <tr>
                <th>{item.time}</th>
                <td>{item.activity}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<FooterNav previousPage={pages[2]} nextPage={pages[4]}/>

<style>
    .table-container {
        margin-top: 40px;

        display: flex; flex-direction: column; gap: 48px;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        text-align: start;
    }

    thead {
        background-color: var(--primary-color);
        height: 30px;
    }

    tr {
        margin: 10px 0px;
    }

    th, td {
        font-size: 14px;
        text-align: start;
        padding: 10px;
        border-bottom: .8px solid;
        border-top: .8px solid;
        border-color: #75778B;
    }
</style>