import { Q as attr_class, T as attr, P as pop, N as push } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "../../chunks/state.svelte.js";
import { a as asset } from "../../chunks/index3.js";
import { p as page } from "../../chunks/index4.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out.push(`<main${attr_class("svelte-9aa241", void 0, { "welcome": page.url.pathname == "/" })}><header class="svelte-9aa241"><button class="svelte-9aa241"><img${attr("src", asset("/logo.png"))} alt="" class="svelte-9aa241"/></button></header> `);
  children?.($$payload);
  $$payload.out.push(`<!----> <footer${attr_class("svelte-9aa241", void 0, {
    "reduced": page.url.pathname === "/" || page.url.pathname === "/menu"
  })}><span class="svelte-9aa241">Designed &amp; built by Customer Team MC</span></footer></main>`);
  pop();
}
export {
  _layout as default
};
