import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BdVqBMRU.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CUqsHGCE.js","_app/immutable/chunks/L3r4xeil.js","_app/immutable/chunks/CZ-B8_az.js","_app/immutable/chunks/CxaE7R5A.js","_app/immutable/chunks/BEMQ-h7p.js"];
export const stylesheets = ["_app/immutable/assets/0.pE6O0g6O.css"];
export const fonts = [];
