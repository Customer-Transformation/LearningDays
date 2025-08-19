import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BVdqL6-i.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/jNx6r4rr.js","_app/immutable/chunks/Dfez_mVo.js","_app/immutable/chunks/CClCigfe.js","_app/immutable/chunks/CtGuqlos.js","_app/immutable/chunks/BJ7VOegP.js","_app/immutable/chunks/CiuW06sr.js","_app/immutable/chunks/DM4GuntJ.js","_app/immutable/chunks/Clpw2Nb8.js"];
export const stylesheets = ["_app/immutable/assets/0.KQTUSjux.css"];
export const fonts = [];
