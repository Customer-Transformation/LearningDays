import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BLq3YpPY.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dkip7DKy.js","_app/immutable/chunks/C-tCCAWz.js","_app/immutable/chunks/EkqFw5R0.js","_app/immutable/chunks/dFTMHMuZ.js","_app/immutable/chunks/BJ7VOegP.js","_app/immutable/chunks/Clko1PDq.js","_app/immutable/chunks/xMI5H8_h.js","_app/immutable/chunks/D1Prelun.js"];
export const stylesheets = ["_app/immutable/assets/0.KQTUSjux.css"];
export const fonts = [];
