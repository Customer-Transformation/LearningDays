import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DM7qR7_N.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dyf8U2Jx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/B-9RPjKj.js","_app/immutable/chunks/BaiiNVgq.js","_app/immutable/chunks/Cg6OtEEK.js","_app/immutable/chunks/Dp5WQ9kC.js"];
export const stylesheets = ["_app/immutable/assets/0.Dft9K5aF.css"];
export const fonts = [];
