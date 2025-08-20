import { T as attr, P as pop, N as push } from "../../../chunks/index2.js";
import { a as asset } from "../../../chunks/index3.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  MenuButton($$payload, { name: "Dinner" });
  $$payload.out.push(`<!----> <div class="poster svelte-x1lf61"><img${attr("src", asset("/dinner.png"))} alt="" class="svelte-x1lf61"/> <div class="corner tl svelte-x1lf61"><h2 class="corner-header svelte-x1lf61">28</h2> <span class="svelte-x1lf61">August</span></div> <div class="corner tr svelte-x1lf61"><h2 class="corner-header svelte-x1lf61">20</h2> <span class="svelte-x1lf61">Start</span></div> <div class="corner bl svelte-x1lf61"><h2 class="corner-header svelte-x1lf61">3</h2> <span class="svelte-x1lf61">Courses</span></div> <div class="corner br svelte-x1lf61"><h2 class="corner-header svelte-x1lf61">1</h2> <span class="svelte-x1lf61">Night</span></div> <div class="center svelte-x1lf61"><h2 class="center-header svelte-x1lf61">The night is ours</h2> <p class="svelte-x1lf61">Hosted by Fanny Taube Persson<br/>&amp; Adam Wiberg</p></div></div> <h4 class="svelte-x1lf61">Bring your best outfit &amp; dancing shoes - leave the rest to us.</h4> <div class="hosts svelte-x1lf61"><h2 class="svelte-x1lf61">Hosted by</h2> <div class="people svelte-x1lf61"><figure class="svelte-x1lf61"><img${attr("src", asset("/fata.png"))} alt="" class="svelte-x1lf61"/> <label for="" class="svelte-x1lf61">Fanny Taube Persson</label></figure> <figure class="svelte-x1lf61"><img${attr("src", asset("/adwi.png"))} alt="" class="svelte-x1lf61"/> <label for="" class="svelte-x1lf61">Adam Wiberg</label></figure></div></div> <div class="seating svelte-x1lf61"><h2 class="svelte-x1lf61">Dinner seating</h2> <div class="temp svelte-x1lf61"><span>COMING SOON</span></div></div> `);
  FooterNav($$payload, { previousPage: pages[3], nextPage: pages[5] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
