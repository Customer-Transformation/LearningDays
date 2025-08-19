import "clsx";
import { P as pop, N as push } from "../../../chunks/index2.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  MenuButton($$payload, { name: "Agenda" });
  $$payload.out.push(`<!----> `);
  {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]--> `);
  FooterNav($$payload, { previousPage: pages[2], nextPage: pages[4] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
