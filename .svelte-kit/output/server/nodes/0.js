import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B6h7rlFr.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CmVSiT4v.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/CwdaN8k3.js","_app/immutable/chunks/Dz2M8Ld5.js","_app/immutable/chunks/kKHo1dyQ.js","_app/immutable/chunks/C4qySfyj.js","_app/immutable/chunks/MtSJW0sH.js"];
export const stylesheets = ["_app/immutable/assets/0.DkW4sq7k.css"];
export const fonts = [];
