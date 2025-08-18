import { T as attr, P as pop, N as push } from "../../../chunks/index2.js";
import { a as asset } from "../../../chunks/index3.js";
import "clsx";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function DinnerSeating($$payload) {
  $$payload.out.push(`<div class="container svelte-3c4jam">Seating</div>`);
}
function _page($$payload, $$props) {
  push();
  MenuButton($$payload, { name: "Dinner" });
  $$payload.out.push(`<!----> <div class="poster svelte-1ota59x"><img${attr("src", asset("/dinner.png"))} alt="" class="svelte-1ota59x"/> <div class="corner tl svelte-1ota59x"><h2 class="corner-header svelte-1ota59x">28</h2> <span class="svelte-1ota59x">August</span></div> <div class="corner tr svelte-1ota59x"><h2 class="corner-header svelte-1ota59x">20</h2> <span class="svelte-1ota59x">Start</span></div> <div class="corner bl svelte-1ota59x"><h2 class="corner-header svelte-1ota59x">3</h2> <span class="svelte-1ota59x">Courses</span></div> <div class="corner br svelte-1ota59x"><h2 class="corner-header svelte-1ota59x">1</h2> <span class="svelte-1ota59x">Night</span></div> <div class="center svelte-1ota59x"><h2 class="center-header svelte-1ota59x">The night is ours</h2> <p class="svelte-1ota59x">Hosted by Fanny Taube Persson<br/>&amp; Adam Wiberg</p></div></div> <h4 class="svelte-1ota59x">Bring your best outfit &amp; dancing shoes - leave the rest to us.</h4> <div class="hosts svelte-1ota59x"><h2>Hosted by</h2> <div class="people svelte-1ota59x"><figure class="svelte-1ota59x"><img${attr("src", asset("/fata.png"))} alt="" class="svelte-1ota59x"/> <label for="" class="svelte-1ota59x">Fanny Taube Persson</label></figure> <figure class="svelte-1ota59x"><img${attr("src", asset("/adwi.png"))} alt="" class="svelte-1ota59x"/> <label for="" class="svelte-1ota59x">Adam Wiberg</label></figure></div></div> `);
  DinnerSeating($$payload);
  $$payload.out.push(`<!----> `);
  FooterNav($$payload, { previousPage: pages[3], nextPage: pages[5] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
