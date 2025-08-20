import { Y as ensure_array_like, Z as attr_style, V as escape_html, P as pop, N as push } from "../../../chunks/index2.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  const scheduleThursday = [
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
    { time: "12:00 - 13:00", style: "grey", activity: "Lunch" },
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
    { time: "19:30 - 20:00", style: "-", activity: "Pre-drinks" },
    {
      time: "20:00 - 22:30",
      style: "-",
      activity: "Festive 3-course dinner"
    },
    { time: "22:20 - 24:00", style: "-", activity: "Party!" }
  ];
  const scheduleFriday = [
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
    { time: "12:15 - 13:15", style: "grey", activity: "Lunch" },
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
  ];
  const each_array = ensure_array_like(scheduleThursday);
  const each_array_1 = ensure_array_like(scheduleFriday);
  MenuButton($$payload, { name: "Agenda" });
  $$payload.out.push(`<!----> <p class="svelte-92tpty">The MC &amp; FSC Learning days will be used to drive both learning &amp; culture building. A detailed schedule for speakers and lectures will be published at a later time.</p> <div class="schedule svelte-92tpty"><table class="svelte-92tpty"><caption class="svelte-92tpty">THURSDAY 28TH</caption><thead class="svelte-92tpty"><tr><th class="svelte-92tpty">TIME</th><th class="svelte-92tpty">ACTIVITY</th></tr></thead><tbody class="svelte-92tpty"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<tr><th class="svelte-92tpty"${attr_style("", {
      color: item.style === "grey" ? "var(--secondary-color)" : "white"
    })}>${escape_html(item.time)}</th><td class="svelte-92tpty"${attr_style("", {
      color: item.style === "grey" ? "var(--secondary-color)" : "white"
    })}>${escape_html(item.activity)}</td></tr>`);
  }
  $$payload.out.push(`<!--]--></tbody></table> <table class="svelte-92tpty"><caption class="svelte-92tpty">FRIDAY 29TH</caption><thead class="svelte-92tpty"><tr><th class="svelte-92tpty">TIME</th><th class="svelte-92tpty">ACTIVITY</th></tr></thead><tbody class="svelte-92tpty"><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$payload.out.push(`<tr><th class="svelte-92tpty"${attr_style("", {
      color: item.style === "grey" ? "var(--secondary-color)" : "white"
    })}>${escape_html(item.time)}</th><td class="svelte-92tpty"${attr_style("", {
      color: item.style === "grey" ? "var(--secondary-color)" : "white"
    })}>${escape_html(item.activity)}</td></tr>`);
  }
  $$payload.out.push(`<!--]--></tbody></table></div> `);
  FooterNav($$payload, { previousPage: pages[2], nextPage: pages[4] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
