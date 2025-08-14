import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BcSekZfu.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/azbqQDXE.js","_app/immutable/chunks/hde5Umxb.js","_app/immutable/chunks/COH_vUTr.js","_app/immutable/chunks/cysWGFCM.js"];
export const stylesheets = [];
export const fonts = [];
