import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.B9Flm7-M.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/8zu9nUTn.js","_app/immutable/chunks/CJroJBdY.js","_app/immutable/chunks/Dme3of2O.js","_app/immutable/chunks/U0-TUtSR.js","_app/immutable/chunks/Bf998EZ0.js"];
export const stylesheets = ["_app/immutable/assets/0.BYGND6zH.css"];
export const fonts = [];
