import { Y as ensure_array_like, V as escape_html, P as pop, N as push } from "../../../chunks/index2.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  let scheduleThursday = [];
  let scheduleFriday = [];
  const each_array = ensure_array_like(scheduleThursday);
  const each_array_1 = ensure_array_like(scheduleFriday);
  MenuButton($$payload, { name: "Agenda" });
  $$payload.out.push(`<!----> <div class="table-container svelte-17uvf8z"><table class="svelte-17uvf8z"><caption class="svelte-17uvf8z">THURSDAY 28TH</caption><thead class="svelte-17uvf8z"><tr class="svelte-17uvf8z"><th class="svelte-17uvf8z">Time</th><th class="svelte-17uvf8z">Activity</th></tr></thead><tbody><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let item = each_array[$$index];
    $$payload.out.push(`<tr class="svelte-17uvf8z"><th class="svelte-17uvf8z">${escape_html(item.time)}</th><td class="svelte-17uvf8z">${escape_html(item.activity)}</td></tr>`);
  }
  $$payload.out.push(`<!--]--></tbody></table> <table class="svelte-17uvf8z"><caption class="svelte-17uvf8z">FRIDAY 29TH</caption><thead class="svelte-17uvf8z"><tr class="svelte-17uvf8z"><th class="svelte-17uvf8z">Time</th><th class="svelte-17uvf8z">Place</th></tr></thead><tbody><!--[-->`);
  for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
    let item = each_array_1[$$index_1];
    $$payload.out.push(`<tr class="svelte-17uvf8z"><th class="svelte-17uvf8z">${escape_html(item.time)}</th><td class="svelte-17uvf8z">${escape_html(item.activity)}</td></tr>`);
  }
  $$payload.out.push(`<!--]--></tbody></table></div> `);
  FooterNav($$payload, { previousPage: pages[2], nextPage: pages[4] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
