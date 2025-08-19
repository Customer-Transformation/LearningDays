import { T as attr, V as escape_html, Y as ensure_array_like, P as pop, N as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
import { a as asset } from "../../../chunks/index3.js";
/* empty css                                                       */
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function BulletInfo($$payload, $$props) {
  let { img, header, body } = $$props;
  $$payload.out.push(`<div class="bullet svelte-zxrfb6"><figure class="svelte-zxrfb6"><img class="icon svelte-zxrfb6"${attr("src", img)} alt=""/> <h4 class="svelte-zxrfb6">${escape_html(header)}</h4></figure> <p>${escape_html(body)}</p></div>`);
}
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
  $$payload.out.push(`<!----> <div class="welcome svelte-vcogbi"><h3 class="svelte-vcogbi">Welcome to FSC and MC Learning Days</h3> <p class="svelte-vcogbi">Two days. One mission. FSC and MC are joining forces to break silos, building bridges, and spart game-changing conversations.</p></div> <div class="card svelte-vcogbi"><img class="card-img svelte-vcogbi"${attr("src", asset("/travel.png"))} alt=""/> <div class="fade svelte-vcogbi"></div> <div class="card-info svelte-vcogbi"><h3 class="svelte-vcogbi">Skogshem &amp; Wijk</h3> <div class="info-figures svelte-vcogbi"><figure class="info-figure svelte-vcogbi"><img class="icon svelte-vcogbi"${attr("src", asset("/calendar-07.png"))} alt=""/> <span class="svelte-vcogbi">28-29 August</span></figure> <figure class="info-figure svelte-vcogbi"><img class="icon svelte-vcogbi"${attr("src", asset("/marker-06.png"))} alt=""/> <span class="svelte-vcogbi">Hustegavägen 1, Lidingö</span></figure></div></div> <button class="card-button svelte-vcogbi">TRAVEL INFO</button></div> <h2 class="svelte-vcogbi">General info</h2> <div class="info svelte-vcogbi"><h3 class="svelte-vcogbi">Time reporting</h3> <p class="svelte-vcogbi">96 -894 (Learning), Fill in ”KPMG” in company and “Learning Days” in Course</p></div> <div class="info svelte-vcogbi"><h3 class="svelte-vcogbi">Meals</h3> <p class="svelte-vcogbi">Lunch, fika and a 3-course dinner will be served on Thursday, and breakfast and lunch will be served on Friday</p></div> <div class="info svelte-vcogbi"><h3 class="svelte-vcogbi">Suggested pack list</h3> `);
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
  $$payload.out.push(`<!----></div> <figure class="rooms svelte-vcogbi"><input type="text"${attr("value", searchString)} class="svelte-vcogbi"/> <ul class="svelte-vcogbi"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let match = each_array[$$index];
    $$payload.out.push(`<li class="svelte-vcogbi"><span class="room-person svelte-vcogbi">${escape_html(match.person)}:</span> <span class="room-info svelte-vcogbi">Room ${escape_html(match.room)} with ${escape_html(match.others)}</span></li>`);
  }
  $$payload.out.push(`<!--]--></ul></figure></div> `);
  FooterNav($$payload, { previousPage: pages[1], nextPage: pages[3] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
