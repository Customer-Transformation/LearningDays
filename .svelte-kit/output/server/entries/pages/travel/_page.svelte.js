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
function RoomFinder($$payload, $$props) {
  push();
  let rooms = [];
  let isSearching = false;
  let searchString = "";
  let matches = (() => {
    const q = searchString.trim().toLowerCase();
    if (!q) return [];
    return rooms.flatMap((r) => {
      const indexed = r.people.map((fullName, idx) => ({ fullName, idx }));
      return indexed.filter(({ fullName }) => {
        const [first = "", last = ""] = fullName.split(" ");
        return first.toLowerCase().startsWith(q) || last.toLowerCase().startsWith(q);
      }).map(({ fullName, idx }) => ({
        person: fullName,
        room: r.id,
        // exclude only the same *slot*, not the same string
        others: r.people.filter((_, j) => j !== idx)
      }));
    });
  })();
  $$payload.out.push(`<label${attr_class("searchbar svelte-f5sh11", void 0, { "active": isSearching })}><img${attr("src", asset("/calendar-07.png"))} alt="" class="icon"/> <input type="text"${attr("value", searchString)} placeholder="Enter your name here" class="svelte-f5sh11"/></label> `);
  if (matches.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(matches.slice(0, 5));
    $$payload.out.push(`<div class="results svelte-f5sh11"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let match = each_array[$$index];
      $$payload.out.push(`<p class="result svelte-f5sh11"><span class="match-person svelte-f5sh11">${escape_html(match.person)}</span> + ${escape_html(match.others)}</p>`);
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
  $$payload.out.push(`<!----> <div class="welcome svelte-1c25fiy"><h3 class="svelte-1c25fiy">Welcome to FSC and MC Learning Days</h3> <p class="svelte-1c25fiy">Two days. One mission. FSC and MC are joining forces to break silos, building bridges, and spart game-changing conversations.</p></div> <div class="card svelte-1c25fiy"><img class="card-img svelte-1c25fiy"${attr("src", asset("/travel.png"))} alt=""/> <div class="fade svelte-1c25fiy"></div> <div class="card-info svelte-1c25fiy"><h3 class="svelte-1c25fiy">Skogshem &amp; Wijk</h3> <div class="info-figures svelte-1c25fiy"><figure class="info-figure svelte-1c25fiy"><img class="icon svelte-1c25fiy"${attr("src", asset("/calendar-07.png"))} alt=""/> <span class="svelte-1c25fiy">28-29 August</span></figure> <figure class="info-figure svelte-1c25fiy"><img class="icon svelte-1c25fiy"${attr("src", asset("/marker-06.png"))} alt=""/> <span class="svelte-1c25fiy">Hustegavägen 1, Lidingö</span></figure></div></div> <button class="card-button svelte-1c25fiy">TRAVEL INFO</button></div> <h2 class="svelte-1c25fiy">General info</h2> <div class="info svelte-1c25fiy"><h3 class="svelte-1c25fiy">Time reporting</h3> <p class="svelte-1c25fiy">96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p></div> <div class="info svelte-1c25fiy"><h3 class="svelte-1c25fiy">Meals</h3> <p class="svelte-1c25fiy">Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p></div> <div class="info svelte-1c25fiy"><h3 class="svelte-1c25fiy">Suggested pack list</h3> `);
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
  $$payload.out.push(`<!----></div> <div class="rooms svelte-1c25fiy"><h2 class="svelte-1c25fiy">Room sharing</h2> <p class="svelte-1c25fiy">Here you can find more information about your stay at Skogshem &amp; Wijk.</p> `);
  RoomFinder($$payload);
  $$payload.out.push(`<!----></div></div> `);
  FooterNav($$payload, { previousPage: pages[1], nextPage: pages[3] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
