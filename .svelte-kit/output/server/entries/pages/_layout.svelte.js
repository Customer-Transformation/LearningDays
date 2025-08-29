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
  $$payload.out.push(`<main${attr_class("svelte-18x5hps", void 0, { "welcome": page.route.id == "/" })}><header class="svelte-18x5hps"><button class="logo-button svelte-18x5hps"><img${attr("src", asset("/logo.svg"))} alt="" class="svelte-18x5hps"/></button> <a href="https://forms.office.com/e/hxQiZJAfHJ" class="feedback svelte-18x5hps"><img${attr("src", asset("/feedbackButtonA.svg"))} alt="" class="svelte-18x5hps"/></a></header> `);
  children?.($$payload);
  $$payload.out.push(`<!----> <footer${attr_class("svelte-18x5hps", void 0, {
    "welcome": page.route.id === "/",
    "menu": page.route.id === "/menu",
    "travel": page.route.id === "/travel"
  })}>`);
  if (page.route.id === "/") {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<span class="svelte-18x5hps">Designed &amp; built by Customer Team MC</span>`);
  } else {
    $$payload.out.push("<!--[!-->");
    $$payload.out.push(`<p class="svelte-18x5hps">Can't find what you're looking for?<br/> Email us → <a href="mailto:se-fmlearningfscmc@kpmg.se" class="svelte-18x5hps">se-fmlearningfscmc@kpmg.se</a></p>`);
  }
  $$payload.out.push(`<!--]--></footer></main>`);
  pop();
}
export {
  _layout as default
};
