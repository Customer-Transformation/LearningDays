import { w as attr_class, x as attr, v as pop, t as push } from "../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../chunks/exports.js";
import "../../chunks/utils.js";
import "../../chunks/state.svelte.js";
import { b as base } from "../../chunks/paths.js";
import { r as resolve_route } from "../../chunks/routing.js";
function resolve(id, params) {
  return base + resolve_route(id, params);
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  let isMenuShown = false;
  children?.($$payload);
  $$payload.out.push(`<!----> <footer class="svelte-16gj0qf"><nav${attr_class("svelte-16gj0qf", void 0, { "hidden": !isMenuShown })}><a${attr("href", resolve("/"))} class="svelte-16gj0qf">Home</a> <a${attr("href", resolve("/contact"))} class="svelte-16gj0qf">Contact</a> <a${attr("href", resolve("/schedule"))} class="svelte-16gj0qf">Schedule</a></nav> <button${attr_class("svelte-16gj0qf", void 0, { "active": isMenuShown })}>+</button></footer>`);
  pop();
}
export {
  _layout as default
};
