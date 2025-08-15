<script lang="ts">
	import { asset } from "$app/paths";
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

<table>
    <thead>
        <tr>
            <th>Time</th>
            <th>Place</th>
            <th>Activity</th>
        </tr>
    </thead>
    <tbody>
        {#each scheduleThursday as item}
        <tr>
            <th>{item.time}</th>
            <td>{item.activity}</td>
            <td>{item.place}</td>
        </tr>
        {/each}
    </tbody>
</table>

<table>
    <thead>
        <tr>
            <th>Time</th>
            <th>Place</th>
            <th>Activity</th>
        </tr>
    </thead>
    <tbody>
        {#each scheduleFriday as item}
        <tr>
            <th>{item.time}</th>
            <td>{item.activity}</td>
            <td>{item.place}</td>
        </tr>
        {/each}
    </tbody>
</table>

<style>
    table {
        border-collapse: collapse;
    }

    th {
        border: 1px solid;
    }

    td {
     border: 1px solid;
    }
</style>