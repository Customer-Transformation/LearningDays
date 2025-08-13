import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.DXy07qv9.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CEnWzjMi.js","_app/immutable/chunks/FLUXDTUD.js","_app/immutable/chunks/DqJnKqMR.js","_app/immutable/chunks/DrQt9GDK.js"];
export const stylesheets = [];
export const fonts = [];
