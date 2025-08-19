import { T as attr, V as escape_html, P as pop, N as push } from "./index2.js";
import "@sveltejs/kit/internal";
import "./exports.js";
import "./utils.js";
import "./state.svelte.js";
import { a as asset } from "./index3.js";
function FooterNav($$payload, $$props) {
  push();
  let { previousPage, nextPage } = $$props;
  $$payload.out.push(`<footer class="svelte-1smwpil"><div class="svelte-1smwpil">`);
  if (previousPage) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<button class="svelte-1smwpil"><img${attr("src", asset("/arrow-left.svg"))} alt="" class="svelte-1smwpil"/></button> <label for="">${escape_html(previousPage.name)}</label>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div> <div class="svelte-1smwpil">`);
  if (nextPage) {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<label for="">${escape_html(nextPage.name)}</label> <button class="svelte-1smwpil"><img class="right-arrow svelte-1smwpil"${attr("src", asset("/arrow-left.svg"))} alt=""/></button>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--></div></footer>`);
  pop();
}
export {
  FooterNav as F
};
