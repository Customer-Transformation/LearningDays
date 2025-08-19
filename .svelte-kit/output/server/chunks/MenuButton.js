import { V as escape_html, T as attr, P as pop, N as push } from "./index2.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "./state.svelte.js";
import { a as asset } from "./index3.js";
function MenuButton($$payload, $$props) {
  push();
  let { name } = $$props;
  $$payload.out.push(`<button class="svelte-q8m6d8"><span class="svelte-q8m6d8">${escape_html(name)}</span> <img${attr("src", asset("/arrow-down-right.svg"))} alt="" class="svelte-q8m6d8"/></button>`);
  pop();
}
export {
  MenuButton as M
};
