import { V as escape_html, T as attr, P as pop, N as push } from "../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/state.svelte.js";
import { a as asset } from "../../../../chunks/index3.js";
import { B as BulletInfo } from "../../../../chunks/BulletInfo.js";
import "clsx";
function TransportBullet($$payload, $$props) {
  let { header, body, note } = $$props;
  $$payload.out.push(`<div class="bullet svelte-1dhm6xz"><header class="svelte-1dhm6xz"><h3 class="svelte-1dhm6xz">${escape_html(header)}</h3> <span class="svelte-1dhm6xz">${escape_html(note)}</span></header> <hr class="svelte-1dhm6xz"/> <h2 class="svelte-1dhm6xz">${escape_html(body)}</h2></div>`);
}
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="container"><button class="svelte-1ctcwrj"><img${attr("src", asset("/arrow-down-right.png"))} alt="" class="svelte-1ctcwrj"/></button> <h2 class="svelte-1ctcwrj">Getting there</h2> <div class="intro svelte-1ctcwrj"><p class="svelte-1ctcwrj">We have arranged transportation from Skogshem &amp; Wijk from Stockholm Cityterminal through bus. See the schedule for the arranged transportation below.</p> <p class="svelte-1ctcwrj">If you prefer to arrange your own transport from Stockholm to Skogshem &amp; Wijk, <strong class="svelte-1ctcwrj">please let us know as soon as possible.</strong></p> <p class="svelte-1ctcwrj">Email: se-fmlearningfscmc@kpmg.se</p></div> <div class="bullet-container svelte-1ctcwrj"><h3 class="svelte-1ctcwrj">From Stockholm</h3> `);
  TransportBullet($$payload, { header: "MEETING POINT", body: "CITYTERMINALEN" });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, { header: "DESTINATION", body: "SKOGSHEM & WIJK" });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, {
    header: "GATHER",
    body: "09:45",
    note: "Be early - bus leaves on time!"
  });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, { header: "DEPARTURE", body: "10:00" });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, { header: "ARRIVAL", body: "10:30" });
  $$payload.out.push(`<!----></div> <div class="bullet-container svelte-1ctcwrj"><h3 class="svelte-1ctcwrj">Return Trip</h3> `);
  TransportBullet($$payload, { header: "MEETING POINT", body: "CITYTERMINALEN" });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, { header: "MEETING POINT", body: "CITYTERMINALEN" });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, { header: "MEETING POINT", body: "CITYTERMINALEN" });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, { header: "MEETING POINT", body: "CITYTERMINALEN" });
  $$payload.out.push(`<!----></div> <div class="other svelte-1ctcwrj"><h3 class="svelte-1ctcwrj">Traveling form other cities</h3> `);
  BulletInfo($$payload, {
    img: asset("/favicon.svg"),
    header: "Gothenburg / Malmö",
    body: "The conference team will arrange your travel. You will receive your train tickets by email."
  });
  $$payload.out.push(`<!----> `);
  BulletInfo($$payload, {
    img: asset("/favicon.svg"),
    header: "Riga / Jönköping",
    body: "Arrange your own travel to Stockholm. You need to be there at Cityterminalen no later than 09:45 on Aug 28th."
  });
  $$payload.out.push(`<!----></div></div>`);
  pop();
}
export {
  _page as default
};
