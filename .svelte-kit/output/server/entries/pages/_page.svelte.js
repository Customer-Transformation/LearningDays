import { x as ensure_array_like, v as pop, t as push } from "../../chunks/index.js";
import { a as asset } from "../../chunks/index2.js";
import { a as attr } from "../../chunks/attributes.js";
import { e as escape_html } from "../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let { data } = $$props;
  const { events } = data;
  const each_array = ensure_array_like(events);
  $$payload.out.push(`<h2>Schedule</h2> <img${attr("src", asset("/favicon.svg"))} alt=""/> <ul><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let e = each_array[$$index];
    $$payload.out.push(`<li>${escape_html(e.date)} ${escape_html(e.time)} — ${escape_html(e.title)} @ ${escape_html(e.location)}</li>`);
  }
  $$payload.out.push(`<!--]--></ul>`);
  pop();
}
export {
  _page as default
};
