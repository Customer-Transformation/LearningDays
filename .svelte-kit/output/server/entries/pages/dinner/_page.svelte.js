import { x as ensure_array_like, v as pop, t as push } from "../../../chunks/index2.js";
import { e as escape_html } from "../../../chunks/escaping.js";
function _page($$payload, $$props) {
  push();
  let scheduleThursday = [];
  let scheduleFriday = [];
  const each_array = ensure_array_like(scheduleThursday);
  const each_array_1 = ensure_array_like(scheduleFriday);
  $$payload.out.push(`<table class="svelte-19abhgt"><thead><tr><th class="svelte-19abhgt">Time</th><th class="svelte-19abhgt">Place</th><th class="svelte-19abhgt">Activity</th></tr></thead><tbody><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<tr><th class="svelte-19abhgt">${escape_html(item.time)}</th><td class="svelte-19abhgt">${escape_html(item.activity)}</td><td class="svelte-19abhgt">${escape_html(item.place)}</td></tr>`);
  }
  $$payload.out.push(`<!--]--></tbody></table> <table class="svelte-19abhgt"><thead><tr><th class="svelte-19abhgt">Time</th><th class="svelte-19abhgt">Place</th><th class="svelte-19abhgt">Activity</th></tr></thead><tbody><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$payload.out.push(`<tr><th class="svelte-19abhgt">${escape_html(item.time)}</th><td class="svelte-19abhgt">${escape_html(item.activity)}</td><td class="svelte-19abhgt">${escape_html(item.place)}</td></tr>`);
  }
  $$payload.out.push(`<!--]--></tbody></table>`);
  pop();
}
export {
  _page as default
};
