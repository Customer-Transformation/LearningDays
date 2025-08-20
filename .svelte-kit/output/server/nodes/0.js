import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.vJKu-aen.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/VEQOL6ZB.js","_app/immutable/chunks/CMpa7G5g.js","_app/immutable/chunks/BOXfj-Ic.js","_app/immutable/chunks/0n5a-gsb.js","_app/immutable/chunks/DpIUycLX.js","_app/immutable/chunks/DJl1zZ7U.js","_app/immutable/chunks/DVqp8m5Q.js"];
export const stylesheets = ["_app/immutable/assets/0.KQTUSjux.css"];
export const fonts = [];
