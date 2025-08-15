import { T as attr, P as pop, N as push } from "../../../chunks/index2.js";
import { a as asset } from "../../../chunks/index3.js";
import { M as MenuButton, F as FooterNav } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  MenuButton($$payload, { name: "Dinner" });
  $$payload.out.push(`<!----> <div class="poster svelte-6inm9m"></div> <h3 class="svelte-6inm9m">Bring your best outfit &amp; dancing shoes - leave the rest to us.</h3> <div class="hosts svelte-6inm9m"><h2>Hosted by</h2> <div class="people svelte-6inm9m"><figure class="svelte-6inm9m"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-6inm9m"/> <label for="" class="svelte-6inm9m">Carina Elgendahl</label></figure> <figure class="svelte-6inm9m"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-6inm9m"/> <label for="" class="svelte-6inm9m">Carina Elgendahl</label></figure></div></div> `);
  FooterNav($$payload, { previousPage: pages[3], nextPage: pages[5] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
