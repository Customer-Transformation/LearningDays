import { T as attr, P as pop, N as push } from "../../../chunks/index2.js";
import { a as asset } from "../../../chunks/index3.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  MenuButton($$payload, { name: "Dinner" });
  $$payload.out.push(`<!----> <div class="poster svelte-2ocgrc"><img${attr("src", asset("/dinner.png"))} alt="" class="svelte-2ocgrc"/> <div class="corner tl svelte-2ocgrc"><h2 class="corner-header svelte-2ocgrc">28</h2> <span class="svelte-2ocgrc">August</span></div> <div class="corner tr svelte-2ocgrc"><h2 class="corner-header svelte-2ocgrc">20</h2> <span class="svelte-2ocgrc">Start</span></div> <div class="corner bl svelte-2ocgrc"><h2 class="corner-header svelte-2ocgrc">3</h2> <span class="svelte-2ocgrc">Courses</span></div> <div class="corner br svelte-2ocgrc"><h2 class="corner-header svelte-2ocgrc">1</h2> <span class="svelte-2ocgrc">Night</span></div> <div class="center svelte-2ocgrc"><h2 class="center-header svelte-2ocgrc">The night is ours</h2> <p class="svelte-2ocgrc">Hosted by Fanny Taube Persson<br/>&amp; Adam Wiberg</p></div></div> <h4 class="svelte-2ocgrc">Bring your best outfit &amp; dancing shoes - leave the rest to us.</h4> <div class="hosts svelte-2ocgrc"><h2>Hosted by</h2> <div class="people svelte-2ocgrc"><figure class="svelte-2ocgrc"><img${attr("src", asset("/fata.png"))} alt="" class="svelte-2ocgrc"/> <label for="" class="svelte-2ocgrc">Fanny Taube Persson</label></figure> <figure class="svelte-2ocgrc"><img${attr("src", asset("/adwi.png"))} alt="" class="svelte-2ocgrc"/> <label for="" class="svelte-2ocgrc">Adam Wiberg</label></figure></div></div> `);
  FooterNav($$payload, { previousPage: pages[3], nextPage: pages[5] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
