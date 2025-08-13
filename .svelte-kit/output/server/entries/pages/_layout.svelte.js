import { a as attr } from "../../chunks/attributes.js";
import { v as pop, t as push } from "../../chunks/index.js";
import { r as resolve } from "../../chunks/index2.js";
function _layout($$payload, $$props) {
  push();
  let { children } = $$props;
  $$payload.out.push(`<nav><a${attr("href", resolve("/"))}>Home</a> <a${attr("href", resolve("/contact"))}>Contact</a> <a${attr("href", resolve("/schedule"))}>Schedule</a></nav> `);
  children?.($$payload);
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _layout as default
};
