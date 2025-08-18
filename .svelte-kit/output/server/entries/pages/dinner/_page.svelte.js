import { T as attr, P as pop, N as push } from "../../../chunks/index2.js";
import { a as asset } from "../../../chunks/index3.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  MenuButton($$payload, { name: "Dinner" });
  $$payload.out.push(`<!----> <div class="poster svelte-vfsvh2"><img${attr("src", asset("/dinner.png"))} alt="" class="svelte-vfsvh2"/> <div class="corner tl svelte-vfsvh2"><h2 class="corner-header svelte-vfsvh2">28</h2> <span class="svelte-vfsvh2">August</span></div> <div class="corner tr svelte-vfsvh2"><h2 class="corner-header svelte-vfsvh2">20</h2> <span class="svelte-vfsvh2">Start</span></div> <div class="corner bl svelte-vfsvh2"><h2 class="corner-header svelte-vfsvh2">3</h2> <span class="svelte-vfsvh2">Courses</span></div> <div class="corner br svelte-vfsvh2"><h2 class="corner-header svelte-vfsvh2">1</h2> <span class="svelte-vfsvh2">Night</span></div> <div class="center svelte-vfsvh2"><h2 class="center-header svelte-vfsvh2">The night is ours</h2> <p class="svelte-vfsvh2">Hosted by Fanny Taube Persson<br/>&amp; Adam Wiberg</p></div></div> <h4 class="svelte-vfsvh2">Bring your best outfit &amp; dancing shoes - leave the rest to us.</h4> <div class="hosts svelte-vfsvh2"><h2>Hosted by</h2> <div class="people svelte-vfsvh2"><figure class="svelte-vfsvh2"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-vfsvh2"/> <label for="" class="svelte-vfsvh2">Carina Elgendahl</label></figure> <figure class="svelte-vfsvh2"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-vfsvh2"/> <label for="" class="svelte-vfsvh2">Carina Elgendahl</label></figure></div></div> `);
  FooterNav($$payload, { previousPage: pages[3], nextPage: pages[5] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
