import { T as attr, V as escape_html, Q as attr_class, Y as ensure_array_like, P as pop, N as push } from "../../../chunks/index2.js";
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
function PeopleSearchRooms($$payload, $$props) {
  push();
  let { template = "room" } = $$props;
  let isSearching = true;
  let searchString = "";
  let matches = /* @__PURE__ */ (() => {
    return [];
  })();
  $$payload.out.push(`<label${attr_class("searchbar svelte-f5sh11", void 0, { "active": isSearching })}><img${attr("src", asset("/search.svg"))} alt="" class="icon"/> <input type="text"${attr("value", searchString)} placeholder="Enter your name here" class="svelte-f5sh11"/></label> `);
  if (matches.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(matches.slice(0, 5));
    $$payload.out.push(`<div class="results svelte-f5sh11"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let match = each_array[$$index];
      if (template === "room") {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<p class="result svelte-f5sh11"><span class="match-person svelte-f5sh11">${escape_html(match.name)}</span> + ${escape_html(match.roomMate)}</p>`);
      } else {
        $$payload.out.push("<!--[!-->");
        $$payload.out.push(`<p class="result svelte-f5sh11"><span class="match-person svelte-f5sh11">${escape_html(match.name)}</span> - Table ${escape_html(match.table)}</p>`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="container">`);
  MenuButton($$payload, { name: "Travel" });
  $$payload.out.push(`<!----> <div class="welcome svelte-1bt7yps"><h3 class="svelte-1bt7yps">Welcome to FSC and MC Learning Days</h3> <p class="svelte-1bt7yps">Two days. One mission. FSC and MC are joining forces to break silos, build bridges, and spark game-changing conversations.</p></div> <div class="card svelte-1bt7yps"><img class="card-img svelte-1bt7yps"${attr("src", asset("/travel.png"))} alt=""/> <div class="fade svelte-1bt7yps"></div> <div class="card-info svelte-1bt7yps"><h3 class="card-header svelte-1bt7yps">Skogshem &amp; Wijk</h3> <div class="info-figures svelte-1bt7yps"><figure class="info-figure svelte-1bt7yps"><img class="icon svelte-1bt7yps"${attr("src", asset("/calendar.svg"))} alt=""/> <span class="svelte-1bt7yps">28-29 August</span></figure> <figure class="info-figure svelte-1bt7yps"><img class="icon svelte-1bt7yps"${attr("src", asset("/marker.svg"))} alt=""/> <span class="svelte-1bt7yps">Hustegavägen 1, Lidingö</span></figure></div></div> <button class="card-button svelte-1bt7yps">TRAVEL INFO</button></div> <h2 class="svelte-1bt7yps">General info</h2> <div class="info svelte-1bt7yps"><h3 class="svelte-1bt7yps">Time reporting</h3> <p class="svelte-1bt7yps">96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p></div> <div class="info svelte-1bt7yps"><h3 class="svelte-1bt7yps">Meals</h3> <p class="svelte-1bt7yps">Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p></div> <div class="info svelte-1bt7yps"><h3 class="svelte-1bt7yps">Suggested pack list</h3> `);
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
  $$payload.out.push(`<!----></div> <div class="rooms svelte-1bt7yps"><h2 class="svelte-1bt7yps">Room sharing</h2> <p class="svelte-1bt7yps">Here you can find more information about your stay at Skogshem &amp; Wijk. If your name does not appear, you have you own room</p> `);
  PeopleSearchRooms($$payload, { template: "room" });
  $$payload.out.push(`<!----></div></div> `);
  FooterNav($$payload, { previousPage: pages[1], nextPage: pages[3] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
