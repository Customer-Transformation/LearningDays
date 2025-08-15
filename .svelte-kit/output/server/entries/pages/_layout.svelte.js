import { Q as attr_class, T as attr, P as pop, N as push } from "../../chunks/index2.js";
import { a as asset } from "../../chunks/index3.js";
import { p as page } from "../../chunks/index4.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out.push(`<main${attr_class("svelte-192rgeg", void 0, { "welcome": page.url.pathname == "/" })}><header class="svelte-192rgeg"><img${attr("src", asset("/logo.png"))} alt="" class="svelte-192rgeg"/></header> `);
  children?.($$payload);
  $$payload.out.push(`<!----></main>`);
  pop();
}
export {
  _layout as default
};
