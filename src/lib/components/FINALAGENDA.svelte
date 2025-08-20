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
        style: string
        activity: string
    }

    type Schedule = {
        key: ScheduleKey
        label: string
        thursdayItems: Item[]
        fridayItems: Item[]
    }

    let loading = $state(true)
    let activeSchedule = $state<ScheduleKey|null>(null)
    let allSchedules = $state<Schedule[]>()
    let scheduleContainers = $state<HTMLLIElement[]>([])

    $inspect(activeSchedule, scheduleContainers)


    async function fetchSchedule() {
        loading = true

        try {
            const response = await fetch(asset("/schedule.json"))
            if (!response.ok) throw new Error("failed to load schedule")
            const data = await response.json()
            allSchedules = [
                { key: "associate", label: "ASSOCIATE", thursdayItems: data.associate.thursday, fridayItems: data.associate.friday },
                { key: "seniorAssociate", label: "SENIOR ASSOCIATE", thursdayItems: data.seniorAssociate.thursday, fridayItems: data.seniorAssociate.friday },
                { key: "manager", label: "MANAGER", thursdayItems: data.manager.thursday, fridayItems: data.manager.friday },
                { key: "seniorManager", label: "SENIOR MANGER", thursdayItems: data.seniorManager.thursday, fridayItems: data.seniorManager.friday },
                { key: "director", label: "DIRECTOR", thursdayItems: data.director.thursday, fridayItems: data.director.friday },
                { key: "partner", label: "PARTNER", thursdayItems: data.partner.thursday, fridayItems: data.partner.friday }
            ]
        } catch (e) {
            
        } finally {
            loading = false
        }
    }

    onMount(fetchSchedule)
</script>

<MenuButton name="Agenda"/>

<p>The MC & FS Learning days will be used to drive both learning & culture building. Here you will find detailed schedules for all our colleagues, select your role to find out more.</p>

{#if allSchedules}
<ul class="schedules">
    {#each allSchedules as { key, label, thursdayItems, fridayItems}, i}
    <li bind:this={scheduleContainers[i]}>
        <button onclick={() => activeSchedule === key ? activeSchedule = null : activeSchedule = key}>
            <span>{label}</span>
            <img src={activeSchedule === key ? asset("/minus.svg") : asset("/plus.svg")} alt="" class="icon">
        </button>

        {#if activeSchedule === key}
        <div class="schedule" transition:slide onintroend={() => scheduleContainers[i].scrollIntoView({ behavior: "smooth", block: "start" })}>
            <table>
                <caption>THURSDAY 28TH</caption>
                <thead>
                    <tr>
                        <th>TIME</th>
                        <th>ACTIVITY</th>
                    </tr>
                </thead>
                <tbody>
                    {#each thursdayItems as item}
                    <tr>
                        <th style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.time}</th>
                        <td style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.activity}</td>
                    </tr>
                    {/each}
                </tbody>
            </table>
            
            <table>
                <caption>FRIDAY 29TH</caption>
                <thead>
                    <tr>
                        <th>TIME</th>
                        <th>ACTIVITY</th>
                    </tr>
                </thead>
                <tbody>
                    {#each fridayItems as item}
                    <tr>
                        <th style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.time}</th>
                        <td style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.activity}</td>
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

    tbody {

        th {
            vertical-align: top;
            width: 110px;
        }
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