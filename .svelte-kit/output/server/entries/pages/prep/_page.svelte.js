import { x as attr, v as pop, t as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
import { a as asset } from "../../../chunks/index3.js";
import { B as BulletInfo } from "../../../chunks/BulletInfo.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="container svelte-3f5mkr">`);
  MenuButton($$payload, { name: "Prep" });
  $$payload.out.push(`<!----> <div class="welcome svelte-3f5mkr"><h3 class="svelte-3f5mkr">Welcome to FSC and MC Learning Days</h3> <p class="svelte-3f5mkr">Two days. One mission. FSC and MC are joining forces to break silos, building bridges, and spart game-changing conversations.</p></div> <div class="card svelte-3f5mkr"><img class="card-img svelte-3f5mkr" src="https://picsum.photos/900" alt=""/> <div class="fade svelte-3f5mkr"></div> <div class="card-info svelte-3f5mkr"><h3 class="svelte-3f5mkr">Skogshem &amp; Wijk</h3> <div class="info-figures svelte-3f5mkr"><figure class="svelte-3f5mkr"><img class="icon svelte-3f5mkr"${attr("src", asset("/favicon.svg"))} alt=""/> <span class="svelte-3f5mkr">28-29 August</span></figure> <figure class="svelte-3f5mkr"><img class="icon svelte-3f5mkr"${attr("src", asset("/favicon.svg"))} alt=""/> <span class="svelte-3f5mkr">Hustegavägen 1, Lidingö</span></figure></div></div> <button class="card-button svelte-3f5mkr">GETTING THERE</button></div> <div class="info svelte-3f5mkr"><h3 class="svelte-3f5mkr">Time reporting</h3> <p class="svelte-3f5mkr">96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p></div> <div class="info svelte-3f5mkr"><h3 class="svelte-3f5mkr">Meals</h3> <p class="svelte-3f5mkr">Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p></div> <div class="info svelte-3f5mkr"><h3 class="svelte-3f5mkr">Suggested pack list</h3> `);
  BulletInfo($$payload, {
    img: asset("/favicon.svg"),
    header: "Festive dinner",
    body: "Business formal clothes for the festive dinner in the evening<"
  });
  $$payload.out.push(`<!----> `);
  BulletInfo($$payload, {
    img: asset("/favicon.svg"),
    header: "Conference",
    body: "Clothes and shoes for two days"
  });
  $$payload.out.push(`<!----> `);
  BulletInfo($$payload, {
    img: asset("/favicon.svg"),
    header: "Pool / sauna",
    body: "Swimwear if you want to use the hotel's outdoor pool or sauna"
  });
  $$payload.out.push(`<!----></div> <figure class="rooms svelte-3f5mkr"><h3 class="svelte-3f5mkr">Room Sharing</h3></figure></div>`);
  pop();
}
export {
  _page as default
};
