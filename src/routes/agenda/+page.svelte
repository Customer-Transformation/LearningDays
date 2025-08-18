<script lang="ts">
	import { asset } from "$app/paths";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";
	import { onMount } from "svelte";
	import { fly, scale, slide } from "svelte/transition";

    type Item = {
        time: string
        place: string
        activity: string
    }

    const schedules = ["ASSOCIATE", "SENIOR ASSOCIATE", "MANAGER", "SENIOR MANAGER", "DIRECTIOR", "PARTNER"] as const
    type Schedule = typeof schedules[number]

    let loading = $state(true)
    let scheduleThursdayASA = $state<Item[]>([])
    let scheduleFridayASA = $state<Item[]>([])
    let scheduleThursdayMD = $state<Item[]>([])
    let scheduleFridayMD = $state<Item[]>([])

    let activeSchedule = $state<Schedule|null>(null)

    async function fetchSchedules() {
        loading = true

        try {
            const response = await fetch(asset("/scheduleThursdayMD.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleThursdayASA = await response.json()
        } catch (e) {

        } 

        try {
            const response = await fetch(asset("/scheduleThursdayMD.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleThursdayMD = await response.json()
        } catch (e) {

        } 

        try {
            const response = await fetch(asset("/scheduleThursdayASA.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleFridayASA = await response.json()
        } catch (e) {

        } 

        try {
            const response = await fetch(asset("/scheduleFridayASA.json"), { cache: "no-store"})
            if (!response.ok) throw new Error("failed to load schedule")
            scheduleFridayMD = await response.json()
        } catch (e) {

        } finally {
            loading = false
        }
    }

    onMount(fetchSchedules)
</script>

<MenuButton name="Agenda"/>

<ul class="schedules">
    {#each schedules as schedule}
    <li>
        <button onclick={() => activeSchedule === schedule ? activeSchedule = null : activeSchedule = schedule}>
            <span>{schedule}</span>
            <img src={activeSchedule === schedule ? asset("/dash.png") : asset("/plus-01.png")} alt="" class="icon">
        </button>

        {#if schedule === activeSchedule}
        <div class="schedule" transition:slide={{ }}>
            <table>
                <caption>THURSDAY 28TH</caption>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {#each scheduleThursdayASA as item}
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
                    {#each scheduleFridayASA as item}
                    <tr>
                        <th>{item.time}</th>
                        <td>{item.activity}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        {/if}
    </li>
    <hr>
    {/each}
</ul>

<FooterNav previousPage={pages[2]} nextPage={pages[4]}/>

<style>
    ul {
        margin-top: 48px;
        width: 100%;

        display: flex; flex-direction: column; gap: 10px;
    }

    button {
        width: 100%;
        background-color: transparent;

        display: flex; justify-content: space-between; align-items: center;
    }

    .icon {
        width: 24px; height: 24px;
    }

    hr {
        background-color: var(--secondary-color);
        height: .8px;
    }
    
    .schedule {
        margin-top: 30px; margin-bottom: 10px;

        display: flex; flex-direction: column; gap: 48px;
    }

    table {
        border-collapse: collapse;
    }

    caption {
        text-align: start;
        margin-bottom: 8px;
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