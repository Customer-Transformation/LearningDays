import { Y as ensure_array_like, T as attr, V as escape_html, P as pop, N as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
import { a as asset } from "../../../chunks/index3.js";
import { B as BulletInfo } from "../../../chunks/BulletInfo.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  let rooms = [];
  let searchString = "";
  let matches = (() => {
    const q = searchString.trim().toLowerCase();
    if (!q) return [];
    return rooms.flatMap((r) => r.people.filter((full) => {
      const [first = "", last = ""] = full.split(" ");
      return first.toLowerCase().startsWith(q) || last.toLowerCase().startsWith(q);
    }).map((person) => ({
      person,
      room: r.id,
      others: r.people.filter((o) => o !== person)
    })));
  })();
  const each_array = ensure_array_like(matches);
  $$payload.out.push(`<div class="container">`);
  MenuButton($$payload, { name: "Travel" });
  $$payload.out.push(`<!----> <div class="welcome svelte-q9v6hj"><h3 class="svelte-q9v6hj">Welcome to FSC and MC Learning Days</h3> <p class="svelte-q9v6hj">Two days. One mission. FSC and MC are joining forces to break silos, building bridges, and spart game-changing conversations.</p></div> <div class="card svelte-q9v6hj"><img class="card-img svelte-q9v6hj"${attr("src", asset("/travel.png"))} alt=""/> <div class="fade svelte-q9v6hj"></div> <div class="card-info svelte-q9v6hj"><h3 class="svelte-q9v6hj">Skogshem &amp; Wijk</h3> <div class="info-figures svelte-q9v6hj"><figure class="info-figure svelte-q9v6hj"><img class="icon svelte-q9v6hj"${attr("src", asset("/calendar-07.png"))} alt=""/> <span class="svelte-q9v6hj">28-29 August</span></figure> <figure class="info-figure svelte-q9v6hj"><img class="icon svelte-q9v6hj"${attr("src", asset("/marker-06.png"))} alt=""/> <span class="svelte-q9v6hj">Hustegavägen 1, Lidingö</span></figure></div></div> <button class="card-button svelte-q9v6hj">TO &amp; FROM</button></div> <h2 class="svelte-q9v6hj">General info</h2> <div class="info svelte-q9v6hj"><h3 class="svelte-q9v6hj">Time reporting</h3> <p class="svelte-q9v6hj">96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p></div> <div class="info svelte-q9v6hj"><h3 class="svelte-q9v6hj">Meals</h3> <p class="svelte-q9v6hj">Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p></div> <div class="info svelte-q9v6hj"><h3 class="svelte-q9v6hj">Suggested pack list</h3> `);
  BulletInfo($$payload, {
    img: asset("/hanger.png"),
    header: "Festive dinner",
    body: "Business formal clothes for the festive dinner in the evening"
  });
  $$payload.out.push(`<!----> `);
  BulletInfo($$payload, {
    img: asset("/hanger.png"),
    header: "Conference",
    body: "Clothes and shoes for two days"
  });
  $$payload.out.push(`<!----> `);
  BulletInfo($$payload, {
    img: asset("/hanger.png"),
    header: "Pool / sauna",
    body: "Swimwear if you want to use the hotel's outdoor pool or sauna"
  });
  $$payload.out.push(`<!----></div> <figure class="rooms svelte-q9v6hj"><input type="text"${attr("value", searchString)} class="svelte-q9v6hj"/> <ul class="svelte-q9v6hj"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let match = each_array[$$index];
    $$payload.out.push(`<li class="svelte-q9v6hj"><span class="room-person svelte-q9v6hj">${escape_html(match.person)}:</span> <span class="room-info svelte-q9v6hj">Room ${escape_html(match.room)} with ${escape_html(match.others)}</span></li>`);
  }
  $$payload.out.push(`<!--]--></ul></figure></div> `);
  FooterNav($$payload, { previousPage: pages[1], nextPage: pages[3] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
