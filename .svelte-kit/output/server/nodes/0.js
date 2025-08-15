import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CK21XQaO.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/D8KuB9Za.js","_app/immutable/chunks/BFO3NEBK.js","_app/immutable/chunks/D_OY6Fer.js","_app/immutable/chunks/CvOAtVQ5.js","_app/immutable/chunks/Dpya5q0S.js"];
export const stylesheets = ["_app/immutable/assets/0.CIWx7JjY.css"];
export const fonts = [];
