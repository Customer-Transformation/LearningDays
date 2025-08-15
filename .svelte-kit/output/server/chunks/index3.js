import { e as escape_html } from "./escaping.js";
import "clsx";
import { a as assets, b as base } from "./paths.js";
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
export {
  attr as a,
  asset as b
};
