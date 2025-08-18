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
  $$payload.out.push(`<div class="container svelte-6hdueb">`);
  MenuButton($$payload, { name: "Crew" });
  $$payload.out.push(`<!----> <div class="mc svelte-6hdueb"><h3 class="svelte-6hdueb">MANAGEMENT CONSULTING</h3> <ul class="top svelte-6hdueb"><figure class="svelte-6hdueb"><img${attr("src", asset("/cael.png"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">Carina Elgendahl</label></figure> <figure class="svelte-6hdueb"><img${attr("src", asset("/favicon.svg"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">David Kåverud</label></figure> <figure class="svelte-6hdueb"><img${attr("src", asset("/nifo.png"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">Nicole Fogelgren Broberg</label></figure></ul> <ul class="bottom svelte-6hdueb"><figure class="svelte-6hdueb"><img${attr("src", asset("/elbe.png"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">Ellen Bergkrans</label></figure> <figure class="svelte-6hdueb"><img${attr("src", asset("/emis.png"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">Emil Isaksson Torgilsman</label></figure></ul></div> <div class="fs svelte-6hdueb"><h3 class="svelte-6hdueb">FINANCIAL SERVICES</h3> <ul class="top svelte-6hdueb"><figure class="svelte-6hdueb"><img${attr("src", asset("/stva.png"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">Stefan Varnelid</label></figure> <figure class="svelte-6hdueb"><img${attr("src", asset("/caev.png"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">Carl Evenbom</label></figure> <figure class="svelte-6hdueb"><img${attr("src", asset("/lial.png"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">Lina Almbladh</label></figure></ul> <ul class="bottom svelte-6hdueb"><figure class="svelte-6hdueb"><img${attr("src", asset("/lime.png"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">Linda Melander</label></figure> <figure class="svelte-6hdueb"><img${attr("src", asset("/nama.png"))} alt="" class="svelte-6hdueb"/> <label for="" class="svelte-6hdueb">Natalie Mattsson</label></figure></ul></div></div> `);
  FooterNav($$payload, { previousPage: pages[5] });
  $$payload.out.push(`<!---->`);
  pop();
}
export {
  _page as default
};
