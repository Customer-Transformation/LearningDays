import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.CkEVWwYj.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CEOA5aOq.js","_app/immutable/chunks/D66ypt2o.js","_app/immutable/chunks/DcQgJebi.js","_app/immutable/chunks/BqMusLLY.js","_app/immutable/chunks/CWC4M9f6.js","_app/immutable/chunks/ChJpjWNX.js"];
export const stylesheets = ["_app/immutable/assets/0.pE6O0g6O.css"];
export const fonts = [];
