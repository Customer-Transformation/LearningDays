import { x as attr, y as escape_html } from "./index2.js";
function BulletInfo($$payload, $$props) {
  let { img, header, body } = $$props;
  $$payload.out.push(`<div class="bullet svelte-cu3axi"><figure class="svelte-cu3axi"><img class="icon svelte-cu3axi"${attr("src", img)} alt=""/> <h4 class="svelte-cu3axi">${escape_html(header)}</h4></figure> <p class="svelte-cu3axi">${escape_html(body)}</p></div>`);
}
export {
  BulletInfo as B
};
