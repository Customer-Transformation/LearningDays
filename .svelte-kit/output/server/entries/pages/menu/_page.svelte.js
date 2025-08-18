import { V as escape_html, T as attr, P as pop, N as push, Y as ensure_array_like } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
import { a as asset } from "../../../chunks/index3.js";
/* empty css                                                      */
import { p as pages } from "../../../chunks/pages.js";
function NavButton($$payload, $$props) {
  push();
  let { page = { name: "Welcome", link: "/welcome" } } = $$props;
  $$payload.out.push(`<button class="svelte-1ftypix"><span class="svelte-1ftypix">${escape_html(page.name)}</span> <img${attr("src", asset("/arrow-down-right.png"))} alt="" class="svelte-1ftypix"/></button>`);
  pop();
}
function _page($$payload) {
  const each_array = ensure_array_like(pages);
  $$payload.out.push(`<menu class="svelte-10c1hde"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let page = each_array[$$index];
    if (page.name !== "Menu" && page.name !== "Welcome") {
      $$payload.out.push("<!--[-->");
      NavButton($$payload, { page });
    } else {
      $$payload.out.push("<!--[!-->");
    }
    $$payload.out.push(`<!--]-->`);
  }
  $$payload.out.push(`<!--]--></menu>`);
}
export {
  _page as default
};
