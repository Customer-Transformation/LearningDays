import { T as attr, V as escape_html, P as pop, N as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
import { a as asset } from "../../../chunks/index3.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function BulletInfo($$payload, $$props) {
  let { img, header, body } = $$props;
  $$payload.out.push(`<div class="bullet svelte-zxrfb6"><figure class="svelte-zxrfb6"><img class="icon svelte-zxrfb6"${attr("src", img)} alt=""/> <h4 class="svelte-zxrfb6">${escape_html(header)}</h4></figure> <p>${escape_html(body)}</p></div>`);
}
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="container">`);
  MenuButton($$payload, { name: "Travel" });
  $$payload.out.push(`<!----> <div class="welcome svelte-tsqvu9"><h3 class="svelte-tsqvu9">Welcome to FSC and MC Learning Days</h3> <p class="svelte-tsqvu9">Two days. One mission. FSC and MC are joining forces to break silos, build bridges, and spark game-changing conversations.</p></div> <div class="card svelte-tsqvu9"><img class="card-img svelte-tsqvu9"${attr("src", asset("/travel.png"))} alt=""/> <div class="fade svelte-tsqvu9"></div> <div class="card-info svelte-tsqvu9"><h3 class="card-header svelte-tsqvu9">Skogshem &amp; Wijk</h3> <div class="info-figures svelte-tsqvu9"><figure class="info-figure svelte-tsqvu9"><img class="icon svelte-tsqvu9"${attr("src", asset("/calendar.svg"))} alt=""/> <span class="svelte-tsqvu9">28-29 August</span></figure> <figure class="info-figure svelte-tsqvu9"><img class="icon svelte-tsqvu9"${attr("src", asset("/marker.svg"))} alt=""/> <span class="svelte-tsqvu9">Hustegavägen 1, Lidingö</span></figure></div></div> <button class="card-button svelte-tsqvu9">TRAVEL INFO</button></div> <h2 class="svelte-tsqvu9">General info</h2> <div class="info svelte-tsqvu9"><h3 class="svelte-tsqvu9">Time reporting</h3> <p class="svelte-tsqvu9">96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p></div> <div class="info svelte-tsqvu9"><h3 class="svelte-tsqvu9">Meals</h3> <p class="svelte-tsqvu9">Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p></div> <div class="info svelte-tsqvu9"><h3 class="svelte-tsqvu9">Suggested pack list</h3> `);
  BulletInfo($$payload, {
    img: asset("/hanger.svg"),
    header: "Festive dinner",
    body: "Business formal clothes for the festive dinner in the evening"
  });
  $$payload.out.push(`<!----> `);
  BulletInfo($$payload, {
    img: asset("/hanger.svg"),
    header: "Conference",
    body: "Business casual clothes and shoes for two days"
  });
  $$payload.out.push(`<!----> `);
  BulletInfo($$payload, {
    img: asset("/hanger.svg"),
    header: "Pool / sauna",
    body: "Swimwear if you want to use the hotel's outdoor pool or sauna"
  });
  $$payload.out.push(`<!----> `);
  BulletInfo($$payload, {
    img: asset("/luggage.svg"),
    header: "Necessities",
    body: "Work computer and charger"
  });
  $$payload.out.push(`<!----></div> <div class="rooms svelte-tsqvu9"><h2 class="svelte-tsqvu9">Room sharing</h2> <p class="svelte-tsqvu9">Here you can find more information about your stay at Skogshem &amp; Wijk.</p> <div class="temp svelte-tsqvu9"><span>COMING SOON</span></div></div></div> `);
  FooterNav($$payload, { previousPage: pages[1], nextPage: pages[3] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
