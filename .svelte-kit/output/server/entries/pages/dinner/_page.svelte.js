import { Q as attr_class, T as attr, Y as ensure_array_like, V as escape_html, P as pop, N as push } from "../../../chunks/index2.js";
import { a as asset } from "../../../chunks/index3.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
import { p as pages } from "../../../chunks/pages.js";
function PeopleSearch($$payload, $$props) {
  push();
  let { template = "dinner" } = $$props;
  let isSearching = true;
  let searchString = "";
  let matches = /* @__PURE__ */ (() => {
    return [];
  })();
  $$payload.out.push(`<label${attr_class("searchbar svelte-f5sh11", void 0, { "active": isSearching })}><img${attr("src", asset("/search.svg"))} alt="" class="icon"/> <input type="text"${attr("value", searchString)} placeholder="Enter your name here" class="svelte-f5sh11"/></label> `);
  if (matches.length > 0) {
    $$payload.out.push("<!--[-->");
    const each_array = ensure_array_like(matches.slice(0, 5));
    $$payload.out.push(`<div class="results svelte-f5sh11"><!--[-->`);
    for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
      let match = each_array[$$index];
      if (template === "room") {
        $$payload.out.push("<!--[-->");
        $$payload.out.push(`<p class="result svelte-f5sh11"><span class="match-person svelte-f5sh11">${escape_html(match.name)}</span> + ${escape_html(match.roomMate)}</p>`);
      } else {
        $$payload.out.push("<!--[!-->");
        $$payload.out.push(`<p class="result svelte-f5sh11"><span class="match-person svelte-f5sh11">${escape_html(match.name)}</span> - Table ${escape_html(match.table)}</p>`);
      }
      $$payload.out.push(`<!--]-->`);
    }
    $$payload.out.push(`<!--]--></div>`);
  } else {
    $$payload.out.push("<!--[!-->");
  }
  $$payload.out.push(`<!--]-->`);
  pop();
}
function _page($$payload, $$props) {
  push();
  MenuButton($$payload, { name: "Dinner" });
  $$payload.out.push(`<!----> <div class="poster svelte-1gt0198"><img${attr("src", asset("/dinner.png"))} alt="" class="svelte-1gt0198"/> <div class="corner tl svelte-1gt0198"><h2 class="corner-header svelte-1gt0198">28</h2> <span class="svelte-1gt0198">August</span></div> <div class="corner tr svelte-1gt0198"><h2 class="corner-header svelte-1gt0198">20</h2> <span class="svelte-1gt0198">Start</span></div> <div class="corner bl svelte-1gt0198"><h2 class="corner-header svelte-1gt0198">3</h2> <span class="svelte-1gt0198">Courses</span></div> <div class="corner br svelte-1gt0198"><h2 class="corner-header svelte-1gt0198">1</h2> <span class="svelte-1gt0198">Night</span></div> <div class="center svelte-1gt0198"><h2 class="center-header svelte-1gt0198">The night is ours</h2> <p class="svelte-1gt0198">Hosted by Fanny Taube Persson<br/>&amp; Adam Wiberg</p></div></div> <h4 class="svelte-1gt0198">Bring your best outfit &amp; dancing shoes - leave the rest to us.</h4> <div class="hosts svelte-1gt0198"><h2 class="svelte-1gt0198">Hosted by</h2> <div class="people svelte-1gt0198"><figure class="svelte-1gt0198"><img${attr("src", asset("/fata.png"))} alt="" class="svelte-1gt0198"/> <label for="" class="svelte-1gt0198">Fanny Taube Persson</label></figure> <figure class="svelte-1gt0198"><img${attr("src", asset("/adwi.png"))} alt="" class="svelte-1gt0198"/> <label for="" class="svelte-1gt0198">Adam Wiberg</label></figure></div></div> <div class="seating svelte-1gt0198"><h2 class="svelte-1gt0198">Seating</h2> `);
  PeopleSearch($$payload, { template: "dinner" });
  $$payload.out.push(`<!----></div> `);
  FooterNav($$payload, { previousPage: pages[3], nextPage: pages[5] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
