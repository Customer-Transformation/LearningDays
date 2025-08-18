import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.Ci9_bj4A.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/8zu9nUTn.js","_app/immutable/chunks/CJroJBdY.js","_app/immutable/chunks/PorVZq--.js","_app/immutable/chunks/BepLu-ZS.js","_app/immutable/chunks/4YuVb6xv.js"];
export const stylesheets = ["_app/immutable/assets/0.iQJEawgf.css"];
export const fonts = [];
