import { y as escape_html, v as pop, t as push } from "../../chunks/index2.js";
import "clsx";
import { p as page } from "../../chunks/index4.js";
function Error($$payload, $$props) {
  push();
  $$payload.out.push(`<h1>${escape_html(page.status)}</h1> <p>${escape_html(page.error?.message)}</p>`);
  pop();
}
export {
  Error as default
};
