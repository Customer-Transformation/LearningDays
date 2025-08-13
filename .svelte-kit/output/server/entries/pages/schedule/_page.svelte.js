import { a as attr } from "../../../chunks/attributes.js";
import { v as pop, t as push } from "../../../chunks/index.js";
import { a as asset } from "../../../chunks/index2.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<!---->schedule <img${attr("src", asset("/favicon.svg"))} alt=""/>`);
  pop();
}
export {
  _page as default
};
