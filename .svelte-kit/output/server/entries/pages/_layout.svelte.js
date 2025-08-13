import { e as escape_html } from "../../chunks/escaping.js";
import "clsx";
import { v as pop, t as push } from "../../chunks/index.js";
import { b as base } from "../../chunks/paths.js";
import { r as resolve_route } from "../../chunks/routing.js";
const replacements = {
  translate: /* @__PURE__ */ new Map([
    [true, "yes"],
    [false, "no"]
  ])
};
function attr(name, value, is_boolean = false) {
  if (value == null || !value && is_boolean) return "";
  const normalized = name in replacements && replacements[name].get(value) || value;
  const assignment = is_boolean ? "" : `="${escape_html(normalized, true)}"`;
  return ` ${name}${assignment}`;
}
function resolve(id, params) {
  return base + resolve_route(id, params);
}
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out.push(`<main><nav><a href="/">Home</a> <a${attr("href", resolve("/contact"))}>Contact</a> <a${attr("href", resolve("/schedule"))}>Schedule</a></nav> <div>`);
  children?.($$payload);
  $$payload.out.push(`<!----></div></main>`);
  pop();
}
export {
  _layout as default
};
