import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.C8xTyE25.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BVkjIp8F.js","_app/immutable/chunks/BalJzrhJ.js","_app/immutable/chunks/CvO2SEa8.js","_app/immutable/chunks/1gUQnJCH.js","_app/immutable/chunks/C7fEdSOY.js","_app/immutable/chunks/DRJ1NU7B.js"];
export const stylesheets = ["_app/immutable/assets/0.pE6O0g6O.css"];
export const fonts = [];
