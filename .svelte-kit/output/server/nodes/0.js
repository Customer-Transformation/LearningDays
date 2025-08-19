import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CU13P_wY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BsNi6Uy5.js","_app/immutable/chunks/2LrZ394Z.js","_app/immutable/chunks/my0m5oJ6.js","_app/immutable/chunks/JDs1NGSG.js","_app/immutable/chunks/ByA3T4Cr.js","_app/immutable/chunks/CnTB2AiL.js"];
export const stylesheets = ["_app/immutable/assets/0.BQr1VAam.css"];
export const fonts = [];
