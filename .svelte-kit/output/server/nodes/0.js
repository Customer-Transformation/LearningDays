import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C5Z-NSs3.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/-G_sTfoH.js","_app/immutable/chunks/CqAAV6Tk.js","_app/immutable/chunks/ZqB36u1O.js","_app/immutable/chunks/2UEVXUpj.js","_app/immutable/chunks/CFRJIDJw.js"];
export const stylesheets = ["_app/immutable/assets/0.BDfluIxE.css"];
export const fonts = [];
