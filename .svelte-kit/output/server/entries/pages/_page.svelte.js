import { a as attr, b as asset } from "../../chunks/index2.js";
import { v as pop, t as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<h2>Schedule</h2> <img${attr("src", asset("/favicon.svg"))} alt=""/> `);
  {
    $$payload.out.push("<!--[-->");
    $$payload.out.push(`<p>Loading...</p>`);
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
export {
  _page as default
};
