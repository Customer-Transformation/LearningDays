import { T as attr, P as pop, N as push } from "../../../chunks/index2.js";
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
  $$payload.out.push(`<div class="container svelte-pu3kxo">`);
  MenuButton($$payload, { name: "Travel" });
  $$payload.out.push(`<!----> <div class="welcome svelte-pu3kxo"><h3 class="svelte-pu3kxo">Welcome to FSC and MC Learning Days</h3> <p class="svelte-pu3kxo">Two days. One mission. FSC and MC are joining forces to break silos, building bridges, and spart game-changing conversations.</p></div> <div class="card svelte-pu3kxo"><img class="card-img svelte-pu3kxo"${attr("src", asset("/travel.png"))} alt=""/> <div class="fade svelte-pu3kxo"></div> <div class="card-info svelte-pu3kxo"><h3 class="svelte-pu3kxo">Skogshem &amp; Wijk</h3> <div class="info-figures svelte-pu3kxo"><figure class="info-figure svelte-pu3kxo"><img class="icon svelte-pu3kxo"${attr("src", asset("/calendar-07.png"))} alt=""/> <span class="svelte-pu3kxo">28-29 August</span></figure> <figure class="info-figure svelte-pu3kxo"><img class="icon svelte-pu3kxo"${attr("src", asset("/marker-06.png"))} alt=""/> <span class="svelte-pu3kxo">Hustegavägen 1, Lidingö</span></figure></div></div> <button class="card-button svelte-pu3kxo">TO &amp; FROM</button></div> <div class="info svelte-pu3kxo"><h3 class="svelte-pu3kxo">Time reporting</h3> <p class="svelte-pu3kxo">96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p></div> <div class="info svelte-pu3kxo"><h3 class="svelte-pu3kxo">Meals</h3> <p class="svelte-pu3kxo">Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p></div> <div class="info svelte-pu3kxo"><h3 class="svelte-pu3kxo">Suggested pack list</h3> `);
  BulletInfo($$payload, {
    img: asset("/hanger.png"),
    header: "Festive dinner",
    body: "Business formal clothes for the festive dinner in the evening<"
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
  $$payload.out.push(`<!----></div> <figure class="rooms svelte-pu3kxo"><h3 class="svelte-pu3kxo">Room Sharing</h3></figure></div> `);
  FooterNav($$payload, { previousPage: pages[1], nextPage: pages[3] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
