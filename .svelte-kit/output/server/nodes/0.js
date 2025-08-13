import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BPQxZIMI.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BT6KussZ.js","_app/immutable/chunks/-QX5y4Md.js","_app/immutable/chunks/BlK_T66N.js","_app/immutable/chunks/SQlIY1xE.js"];
export const stylesheets = [];
export const fonts = [];
