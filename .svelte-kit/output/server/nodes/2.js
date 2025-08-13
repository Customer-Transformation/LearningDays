import * as universal from '../entries/pages/_page.ts.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.ts";
export const imports = ["_app/immutable/nodes/2.CdllZjMB.js","_app/immutable/chunks/BlK_T66N.js","_app/immutable/chunks/BT6KussZ.js","_app/immutable/chunks/SQlIY1xE.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/ysPryp9P.js"];
export const stylesheets = [];
export const fonts = [];
