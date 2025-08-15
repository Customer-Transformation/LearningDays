import { a as attr, b as asset } from "../../chunks/index3.js";
import { v as pop, t as push } from "../../chunks/index2.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out.push(`<main class="svelte-12bx778"><header class="svelte-12bx778"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-12bx778"/></header> `);
  children?.($$payload);
  $$payload.out.push(`<!----></main>`);
  pop();
}
export {
  _layout as default
};
