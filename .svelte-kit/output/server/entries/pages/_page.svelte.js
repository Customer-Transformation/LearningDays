import { x as ensure_array_like, v as pop, t as push } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import { a as attr, b as asset } from "../../chunks/index3.js";
import "../../chunks/state.svelte.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  const pages = [
    // { name: "welcome", link: "/" },
    // { name: "menu", link: "/menu" },
    { name: "crew", link: "/crew" },
    { name: "prep", link: "/prep" },
    { name: "agenda", link: "/agenda" },
    { name: "dinner", link: "/dinner" },
    { name: "explore", link: "/explore" }
  ];
  const each_array = ensure_array_like(pages);
  $$payload.out.push(`<menu class="svelte-5jt5gv"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    $$payload.out.push(`<button class="svelte-5jt5gv"><span class="svelte-5jt5gv">${escape_html(page.name)}</span> <img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-5jt5gv"/></button>`);
  }
  $$payload.out.push(`<!--]--></menu>`);
  pop();
}
export {
  _page as default
};
