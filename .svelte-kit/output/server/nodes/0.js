import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C11WKRok.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dkip7DKy.js","_app/immutable/chunks/C-tCCAWz.js","_app/immutable/chunks/EkqFw5R0.js","_app/immutable/chunks/dFTMHMuZ.js","_app/immutable/chunks/BJ7VOegP.js","_app/immutable/chunks/2EX5wdR0.js","_app/immutable/chunks/C8-WOVj0.js","_app/immutable/chunks/DmCsS1sq.js"];
export const stylesheets = ["_app/immutable/assets/0.KQTUSjux.css"];
export const fonts = [];
