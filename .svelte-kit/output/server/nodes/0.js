import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DDwpViFf.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BsNi6Uy5.js","_app/immutable/chunks/2LrZ394Z.js","_app/immutable/chunks/my0m5oJ6.js","_app/immutable/chunks/BpKOQssX.js","_app/immutable/chunks/BlaY9hMT.js","_app/immutable/chunks/C3mX19o2.js"];
export const stylesheets = ["_app/immutable/assets/0.BQr1VAam.css"];
export const fonts = [];
