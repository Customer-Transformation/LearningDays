<script lang="ts">
	import { asset } from "$app/paths";
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";
	import { onMount } from "svelte";
	import { slide } from "svelte/transition";

    const scheduleKeys = ["associate", "seniorAssociate", "manager", "seniorManager", "director", "partner"] as const
    type ScheduleKey = typeof scheduleKeys[number]

    type Item = {
        time: string
        place: string
        activity: string
    }

    type ScheduleData = {
        associate: Item[]
        seniorAssociate: Item[]
        manager: Item[]
        seniorManager: Item[]
        director: Item[]
        partner: Item[]
    }

    type Schedule = {
        key: ScheduleKey
        label: string
        items: Item[]
    }

    let loading = $state(true)
    let activeSchedule = $state<ScheduleKey|null>(null)
    let allSchedules = $state<Schedule[]>()


    async function fetchSchedule() {
        loading = true

        try {
            const response = await fetch(asset("/schedule.json"))
            if (!response.ok) throw new Error("failed to load schedule")
            const data: ScheduleData = await response.json()
            allSchedules = [
                { key: "associate", label: "ASSOCIATE", items: data.associate },
                { key: "seniorAssociate", label: "SENIOR ASSOCIATE", items: data.seniorAssociate },
                { key: "manager", label: "MANAGER", items: data.manager },
                { key: "seniorManager", label: "SENIOR MANGER", items: data.seniorManager },
                { key: "director", label: "DIRECTOR", items: data.director },
                { key: "partner", label: "PARTNER", items: data.partner }
            ]
        } catch (e) {
            
        } finally {
            loading = false
        }
    }

    let activeScheduleContainers = $state<HTMLLIElement[]>([])

    $inspect(activeScheduleContainers)

    onMount(fetchSchedule)
</script>

<MenuButton name="Agenda"/>

<p>The MC & FS Learning days will be used to drive both learning & culture building. Here you will find detailed schedules for all our colleagues, select your role to find out more.</p>

{#if allSchedules}
<ul class="schedules">
    {#each allSchedules as { key, label, items}, i}
    <li bind:this={activeScheduleContainers[i]}>
        <button onclick={() => activeSchedule === key ? activeSchedule = null : activeSchedule = key}>
            <span>{label}</span>
            <img src={activeSchedule === key ? asset("/dash.png") : asset("/plus-01.png")} alt="" class="icon">
        </button>

        {#if activeSchedule === key}
        <div class="schedule" transition:slide onintroend={() => activeScheduleContainers[i].scrollIntoView({ behavior: "smooth" })}>
            <table>
                <caption>THURSDAY 28TH</caption>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Activity</th>
                    </tr>
                </thead>
                <tbody>
                    {#each items as item}
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
                    {#each items as item}
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
{/if}

<FooterNav previousPage={pages[2]} nextPage={pages[4]}/>

<style>
    p {
        margin-top: 40px;
    }

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