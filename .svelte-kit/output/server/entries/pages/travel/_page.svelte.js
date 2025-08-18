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
  $$payload.out.push(`<div class="container svelte-1c21km6">`);
  MenuButton($$payload, { name: "Travel" });
  $$payload.out.push(`<!----> <div class="welcome svelte-1c21km6"><h3 class="svelte-1c21km6">Welcome to FSC and MC Learning Days</h3> <p class="svelte-1c21km6">Two days. One mission. FSC and MC are joining forces to break silos, building bridges, and spart game-changing conversations.</p></div> <div class="card svelte-1c21km6"><img class="card-img svelte-1c21km6"${attr("src", asset("/travel.png"))} alt=""/> <div class="fade svelte-1c21km6"></div> <div class="card-info svelte-1c21km6"><h3 class="svelte-1c21km6">Skogshem &amp; Wijk</h3> <div class="info-figures svelte-1c21km6"><figure class="info-figure svelte-1c21km6"><img class="icon svelte-1c21km6"${attr("src", asset("/calendar-07.png"))} alt=""/> <span class="svelte-1c21km6">28-29 August</span></figure> <figure class="info-figure svelte-1c21km6"><img class="icon svelte-1c21km6"${attr("src", asset("/marker-06.png"))} alt=""/> <span class="svelte-1c21km6">Hustegavägen 1, Lidingö</span></figure></div></div> <button class="card-button svelte-1c21km6">TO &amp; FROM</button></div> <div class="info svelte-1c21km6"><h3 class="svelte-1c21km6">Time reporting</h3> <p class="svelte-1c21km6">96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p></div> <div class="info svelte-1c21km6"><h3 class="svelte-1c21km6">Meals</h3> <p class="svelte-1c21km6">Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p></div> <div class="info svelte-1c21km6"><h3 class="svelte-1c21km6">Suggested pack list</h3> `);
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
  $$payload.out.push(`<!----></div> <figure class="rooms svelte-1c21km6"><input type="text"${attr("value", searchString)} class="svelte-1c21km6"/> <ul class="svelte-1c21km6"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let match = each_array[$$index];
    $$payload.out.push(`<li class="svelte-1c21km6"><span class="room-person svelte-1c21km6">${escape_html(match.person)}:</span> <span class="room-info svelte-1c21km6">Room ${escape_html(match.room)} with ${escape_html(match.others)}</span></li>`);
  }
  $$payload.out.push(`<!--]--></ul></figure></div> `);
  FooterNav($$payload, { previousPage: pages[1], nextPage: pages[3] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
