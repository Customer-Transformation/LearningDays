import { T as attr, P as pop, N as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
import { a as asset } from "../../../chunks/index3.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
/* empty css                                                      */
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="container svelte-j4d8qt">`);
  MenuButton($$payload, { name: "Crew" });
  $$payload.out.push(`<!----> <div class="mc svelte-j4d8qt"><h3 class="svelte-j4d8qt">MANAGEMENT CONSULTING</h3> <ul class="top svelte-j4d8qt"><figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure> <figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure> <figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure></ul> <ul class="bottom svelte-j4d8qt"><figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure> <figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure></ul></div> <div class="fs svelte-j4d8qt"><h3 class="svelte-j4d8qt">FINANCIAL SERVICES</h3> <ul class="top svelte-j4d8qt"><figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure> <figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure> <figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure></ul> <ul class="bottom svelte-j4d8qt"><figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure> <figure class="svelte-j4d8qt"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-j4d8qt"/> <label for="" class="svelte-j4d8qt">Carina Elgendahl</label></figure></ul></div></div> `);
  FooterNav($$payload, { previousPage: pages[5] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
