import { y as escape_html, x as attr, v as pop, t as push, F as ensure_array_like } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "clsx";
import "../../../chunks/state.svelte.js";
import { a as asset } from "../../../chunks/index3.js";
/* empty css                                                      */
function NavButton($$payload, $$props) {
  push();
  let { page = { name: "Welcome", link: "/welcome" } } = $$props;
  $$payload.out.push(`<button class="svelte-h3xhdf"><span class="svelte-h3xhdf">${escape_html(page.name)}</span> <img${attr("src", asset("/arrow-down-right.png"))} alt="" class="svelte-h3xhdf"/></button>`);
  pop();
}
const pages = [
  { name: "Welcome", link: "/" },
  { name: "Menu", link: "/menu" },
  { name: "Crew", link: "/crew" },
  { name: "Prep", link: "/prep" },
  { name: "Agenda", link: "/agenda" },
  { name: "Dinner", link: "/dinner" },
  { name: "Explore", link: "/explore" }
];
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
