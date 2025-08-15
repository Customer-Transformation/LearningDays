import { V as escape_html, P as pop, N as push, T as attr } from "./index2.js";
import "clsx";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "./state.svelte.js";
import { a as asset } from "./index3.js";
function FooterNav($$payload, $$props) {
  push();
  let { previousPage, nextPage } = $$props;
  $$payload.out.push(`<footer class="svelte-8txi1e"><div class="svelte-8txi1e">`);
  if (previousPage) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<button class="svelte-8txi1e">L</button> <label for="">${escape_html(previousPage.name)}</label>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="svelte-8txi1e">`);
  if (nextPage) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<label for="">${escape_html(nextPage.name)}</label> <button class="svelte-8txi1e">R</button>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></footer>`);
  pop();
}
function MenuButton($$payload, $$props) {
  push();
  let { name } = $$props;
  $$payload.out.push(`<button class="svelte-q8m6d8"><span class="svelte-q8m6d8">${escape_html(name)}</span> <img${attr("src", asset("/arrow-down-right.png"))} alt="" class="svelte-q8m6d8"/></button>`);
  pop();
}
export {
  FooterNav as F,
  MenuButton as M
};
