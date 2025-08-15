import "clsx";
import { P as pop, N as push } from "../../../chunks/index2.js";
import { M as MenuButton, F as FooterNav } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  MenuButton($$payload, { name: "Explore" });
  $$payload.out.push(`<!----> <div class="activities svelte-10rq896"></div> `);
  FooterNav($$payload, { previousPage: pages[4], nextPage: pages[6] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
