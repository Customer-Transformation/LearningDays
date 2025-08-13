import { a as attr, r as resolve } from "../../chunks/index2.js";
import { v as pop, t as push } from "../../chunks/index.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<main><h1>Learning Days 2025</h1> <p>Did you ever hear the tragedy of Darth Plagueis the Wise? I thought not. It's not a story the Jedi would tell you. It's a <a${attr("href", resolve("/contact"))}>Sith</a> legend. Darth Plagueis was a Dark Lord of the Sith, so powerful and so wise he could use the Force to influence the midichlorians to create life... He had such a knowledge of the dark side that he could even keep the ones he cared about from dying. The dark side of the Force is a pathway to many abilities some consider to be unnatural. He became so powerful... the only thing he was afraid of was losing his power, which eventually, of course, he did. Unfortunately, he taught his apprentice everything he knew, then his apprentice killed him in his sleep. It's ironic he could save others from death, but not himself.</p></main>`);
  pop();
}
export {
  _page as default
};
