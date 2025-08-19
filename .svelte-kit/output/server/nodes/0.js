import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.D0FwMMew.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CUqsHGCE.js","_app/immutable/chunks/L3r4xeil.js","_app/immutable/chunks/CEmlDZEv.js","_app/immutable/chunks/CRrf-1KZ.js","_app/immutable/chunks/CvWTpLS_.js"];
export const stylesheets = ["_app/immutable/assets/0.Cxpf3n_8.css"];
export const fonts = [];
