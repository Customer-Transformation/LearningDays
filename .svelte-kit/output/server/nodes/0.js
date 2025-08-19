import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BOEM92ak.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BVkjIp8F.js","_app/immutable/chunks/BalJzrhJ.js","_app/immutable/chunks/CvO2SEa8.js","_app/immutable/chunks/Bn7PVp7k.js","_app/immutable/chunks/Dibdu7Js.js","_app/immutable/chunks/63dw73pl.js"];
export const stylesheets = ["_app/immutable/assets/0.pE6O0g6O.css"];
export const fonts = [];
