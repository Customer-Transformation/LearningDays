import { T as attr, P as pop, N as push } from "../../../chunks/index2.js";
import "@sveltejs/kit/internal";
import "../../../chunks/exports.js";
import "../../../chunks/utils.js";
import "../../../chunks/state.svelte.js";
import { a as asset } from "../../../chunks/index3.js";
import { F as FooterNav } from "../../../chunks/FooterNav.js";
import { M as MenuButton } from "../../../chunks/MenuButton.js";
/* empty css                                                      */
import { p as pages } from "../../../chunks/pages.js";
function _page($$payload, $$props) {
  push();
  $$payload.out.push(`<div class="container svelte-9k8beu">`);
  MenuButton($$payload, { name: "Crew" });
  $$payload.out.push(`<!----> <div class="mc svelte-9k8beu"><h3 class="svelte-9k8beu">MANAGEMENT CONSULTING</h3> <ul class="svelte-9k8beu"><figure class="svelte-9k8beu"><img${attr("src", asset("/cael.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Carina Elgendahl</label></figure> <figure class="svelte-9k8beu"><img${attr("src", asset("/daka.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">David Kåverud</label></figure> <figure class="svelte-9k8beu"><img${attr("src", asset("/nifo.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Nicole Fogelgren Broberg</label></figure></ul> <ul class="svelte-9k8beu"><figure class="svelte-9k8beu"><img${attr("src", asset("/elbe.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Ellen Bergkrans</label></figure> <figure class="svelte-9k8beu"><img${attr("src", asset("/emis.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Emil Isaksson Torgilsman</label></figure></ul></div> <div class="fs svelte-9k8beu"><h3 class="svelte-9k8beu">FINANCIAL SERVICES</h3> <ul class="svelte-9k8beu"><figure class="svelte-9k8beu"><img${attr("src", asset("/stva.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Stefan Varnelid</label></figure> <figure class="svelte-9k8beu"><img${attr("src", asset("/caev.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Carl Evenbom</label></figure> <figure class="svelte-9k8beu"><img${attr("src", asset("/lial.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Lina Almbladh</label></figure></ul> <ul class="svelte-9k8beu"><figure class="svelte-9k8beu"><img${attr("src", asset("/lime.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Linda Melander</label></figure> <figure class="svelte-9k8beu"><img${attr("src", asset("/nama.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Natalie Mattsson</label></figure></ul></div> <div class="ct svelte-9k8beu"><h3 class="svelte-9k8beu">DESIGN &amp; DEV TEAM (MC)</h3> <ul class="svelte-9k8beu"><figure class="svelte-9k8beu"><img${attr("src", asset("/roda.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Robin Dafnäs</label></figure> <figure class="svelte-9k8beu"><img${attr("src", asset("/zipe.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Zihan Persson</label></figure> <figure class="svelte-9k8beu"><img${attr("src", asset("/albe.png"))} alt="" class="svelte-9k8beu"/> <label for="" class="svelte-9k8beu">Alfred Berg</label></figure></ul></div></div> `);
  FooterNav($$payload, { previousPage: pages[5] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
