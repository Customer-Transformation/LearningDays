import { w as attr_class, x as attr, v as pop, t as push } from "../../chunks/index2.js";
import { a as asset } from "../../chunks/index3.js";
import { p as page } from "../../chunks/index4.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out.push(`<main${attr_class("svelte-zncjhm", void 0, { "welcome": page.url.pathname == "/" })}><header class="svelte-zncjhm"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-zncjhm"/></header> `);
  children?.($$payload);
  $$payload.out.push(`<!----></main>`);
  pop();
}
export {
  _layout as default
};
