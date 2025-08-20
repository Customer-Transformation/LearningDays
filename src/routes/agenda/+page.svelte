<script lang="ts">
	import FooterNav from "$lib/components/FooterNav.svelte";
	import MenuButton from "$lib/components/MenuButton.svelte";
	import { pages } from "$lib/data/pages";
    
    type Item = {
        time: string
        style: string
        activity: string
    }
    
    const scheduleThursday: Item[] = [
        {
            time: "10:00 - 10:30",
            style: "grey",
            activity: "Transport to Skogshem & Wijk"
        },
        {
            time: "10:30 - 11:00",
            style: "grey",
            activity: "Arrival and check-in"
        },
        {
            time: "11:00 - 12:00",
            style: "-",
            activity: "Introduction & Speaker"
        },
        {
            time: "12:00 - 13:00",
            style: "grey",
            activity: "Lunch"
        },
        {
            time: "13:00 - 15:00",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "15:00 - 15:20",
            style: "grey",
            activity: "Break with coffee"
        },
        {
            time: "15:20 - 16:20",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "16:20 - 16:30",
            style: "grey",
            activity: "Break with coffee"
        },
        {
            time: "16:30 - 17:30",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "17:30 - 19:30",
            style: "grey",
            activity: "Free time: spa / activities"
        },
        {
            time: "19:30 - 20:00",
            style: "-",
            activity: "Pre-drinks"
        },
        {
            time: "20:00 - 22:30",
            style: "-",
            activity: "Festive 3-course dinner"
        },
        {
            time: "22:20 - 24:00",
            style: "-",
            activity: "Party!"
        }
    ]
    
    const scheduleFriday: Item[] = [
        {
            time: "07:00 - 08:15",
            style: "grey",
            activity: "Breakfast buffet"
        },
        {
            time: "08:15 - 10:00",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "10:00 - 10:15",
            style: "grey",
            activity: "Break with coffee"
        },
        {
            time: "10:15 - 12:15",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "12:15 - 13:15",
            style: "grey",
            activity: "Lunch"
        },
        {
            time: "13:15 - 15:15",
            style: "-",
            activity: "Speakers / Lecture"
        },
        {
            time: "15:15 - 15:30",
            style: "-",
            activity: "Closing session"
        },
        {
            time: "15:30 - 15:45",
            style: "grey",
            activity: "Checkout / Go to bus"
        },
        {
            time: "15:45 - 16:30",
            style: "grey",
            activity: "Transport to Cityterminalen"
        }
    ]

</script>

<MenuButton name="Agenda"/>

<p>The MC & FSC Learning days will be used to drive both learning & culture building. A detailed schedule for speakers and lectures will be published at a later time.</p>

<div class="schedule">
    <table>
        <caption>THURSDAY 28TH</caption>
        <thead>
            <tr>
                <th>TIME</th>
                <th>ACTIVITY</th>
            </tr>
        </thead>
        <tbody>
            {#each scheduleThursday as item}
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
            {#each scheduleFriday as item}
            <tr>
                <th style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.time}</th>
                <td style:color={item.style === "grey" ? "var(--secondary-color)" : "white"}>{item.activity}</td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>

<FooterNav previousPage={pages[2]} nextPage={pages[4]}/>

<style>
    p {
        margin-top: 40px;
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