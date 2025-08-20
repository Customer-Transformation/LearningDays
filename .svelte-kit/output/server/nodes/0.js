import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.BpgnRp87.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/VEQOL6ZB.js","_app/immutable/chunks/CMpa7G5g.js","_app/immutable/chunks/BOXfj-Ic.js","_app/immutable/chunks/0n5a-gsb.js","_app/immutable/chunks/DQgHqGw1.js","_app/immutable/chunks/CBadstJk.js","_app/immutable/chunks/C1WQ14bI.js"];
export const stylesheets = ["_app/immutable/assets/0.KQTUSjux.css"];
export const fonts = [];
