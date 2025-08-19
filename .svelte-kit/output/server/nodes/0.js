import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C65Kfs35.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CUqsHGCE.js","_app/immutable/chunks/L3r4xeil.js","_app/immutable/chunks/C9mLQ7cz.js","_app/immutable/chunks/23wBTe6Y.js","_app/immutable/chunks/Cy_-7EyM.js"];
export const stylesheets = ["_app/immutable/assets/0.Cwg0wqGP.css"];
export const fonts = [];
