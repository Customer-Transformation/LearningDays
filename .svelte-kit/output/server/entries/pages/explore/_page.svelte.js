import { Y as ensure_array_like, V as escape_html, T as attr, P as pop, N as push } from "../../../chunks/index2.js";
import { a as asset } from "../../../chunks/index3.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  const activities = [
    "SHUFFLEBOARD",
    "HEATED OUTDOOR POOL",
    "SAUNAS",
    "GYM",
    "POOL TABLE",
    "PING PONG TABLE",
    "INDOOR MINI GOLF",
    "BOARD GAMES",
    "SEA ACCESS WITH PRIVATE PIERS",
    "AIR HOCKEY",
    "KUBB"
  ];
  const each_array = ensure_array_like(activities);
  MenuButton($$payload, { name: "Explore" });
  $$payload.out.push(`<!----> <div class="activities svelte-11emly7"><!--[-->`);
  for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
    let activity = each_array[$$index];
    $$payload.out.push(`<span class="activity svelte-11emly7">${escape_html(activity)}</span>`);
  }
  $$payload.out.push(`<!--]--></div> <div class="images svelte-11emly7"><img${attr("src", asset("/Pool.png"))} alt="" class="svelte-11emly7"/> <img${attr("src", asset("/Bastu.png"))} alt="" class="svelte-11emly7"/> <img${attr("src", asset("/Mingle.png"))} alt="" class="svelte-11emly7"/> <img${attr("src", asset("/Gym.png"))} alt="" class="svelte-11emly7"/> <img${attr("src", asset("/Cornhole.png"))} alt="" class="svelte-11emly7"/></div> <p class="svelte-11emly7">If you want to do an activity that hasn’t already been set up, please go the the reception and they will help you get started.</p> `);
  FooterNav($$payload, { previousPage: pages[4], nextPage: pages[6] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
