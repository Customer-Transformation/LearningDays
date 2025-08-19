import { V as escape_html, T as attr, P as pop, N as push } from "../../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../../chunks/exports.js";
import "../../../../chunks/utils.js";
import "../../../../chunks/state.svelte.js";
import { a as asset } from "../../../../chunks/index3.js";
import { F as FooterNav } from "../../../../chunks/FooterNav.js";
import "clsx";
import { p as pages } from "../../../../chunks/pages.js";
function TransportBullet($$payload, $$props) {
  let { header, body, note } = $$props;
  $$payload.out.push(`<div class="bullet svelte-1dhm6xz"><header class="svelte-1dhm6xz"><h3 class="svelte-1dhm6xz">${escape_html(header)}</h3> <span class="svelte-1dhm6xz">${escape_html(note)}</span></header> <hr class="svelte-1dhm6xz"/> <h2 class="svelte-1dhm6xz">${escape_html(body)}</h2></div>`);
}
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="container"><button class="svelte-1ms3dpd"><img${attr("src", asset("/arrow-down-right.png"))} alt="" class="svelte-1ms3dpd"/></button> <h2 class="svelte-1ms3dpd">Travel info</h2> <div class="intro svelte-1ms3dpd"><p>We have arranged transportation from Skogshem &amp; Wijk from Stockholm Cityterminal through bus. See the schedule for the arranged transportation below.</p> <p>If you prefer to arrange your own transport from Stockholm to Skogshem &amp; Wijk, <strong class="svelte-1ms3dpd">please let us know as soon as possible.</strong></p> <p>Email: <a href="mailto:se-fmlearningfscmc" class="mail svelte-1ms3dpd">se-fmlearningfscmc@kpmg.se</a></p></div> <div class="bullet-container svelte-1ms3dpd"><h3 class="svelte-1ms3dpd">From Stockholm</h3> `);
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
  $$payload.out.push(`<!----></div> <div class="bullet-container svelte-1ms3dpd"><h3 class="svelte-1ms3dpd">Return Trip</h3> `);
  TransportBullet($$payload, { header: "MEETING POINT", body: "SKOGSHEM & WIJK" });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, { header: "DESTINATION", body: "CITYTERMINALEN" });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, { header: "DEPARTURE", body: "15:45" });
  $$payload.out.push(`<!----> `);
  TransportBullet($$payload, { header: "ARRIVAL", body: "16:15" });
  $$payload.out.push(`<!----></div> <div class="other svelte-1ms3dpd"><h3 class="svelte-1ms3dpd">Traveling form other cities</h3> <div class="bullet svelte-1ms3dpd"><figure class="svelte-1ms3dpd"><img class="icon svelte-1ms3dpd"${attr("src", asset("/ticket-02.png"))} alt=""/> <h4 class="svelte-1ms3dpd">Gothenburg / Malmö</h4></figure> <p>The conference team will arrange your travel. You will receive your train tickets by email.</p> <p>If you have not received your tickets, reach out to the conference team, <a href="mailto:se-fmlearningfscmc@kpmg.se" class="mail svelte-1ms3dpd">se-fmlearningfscmc@kpmg.se</a></p></div> <div class="bullet svelte-1ms3dpd"><figure class="svelte-1ms3dpd"><img class="icon svelte-1ms3dpd"${attr("src", asset("/ticket-02.png"))} alt=""/> <h4 class="svelte-1ms3dpd">Riga / Jönköping</h4></figure> <p>Arrange your own travel to Stockholm. You need to be there at Cityterminalen <span class="svelte-1ms3dpd">no later than 09:45 on Aug 28th</span></p></div></div></div> `);
  FooterNav($$payload, {
    previousPage: { name: "Back to Travel", link: pages[2].link }
  });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
