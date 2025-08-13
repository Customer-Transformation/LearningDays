import { e as escape_html } from "./escaping.js";
import "clsx";
import { b as base, a as assets } from "./paths.js";
import { r as resolve_route } from "./routing.js";
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
function asset(file) {
  return (assets || base) + file;
}
function resolve(id, params) {
  return base + resolve_route(id, params);
}
export {
  attr as a,
  asset as b,
  resolve as r
};
