

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.B0sbG7LO.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DYwPg3ZH.js","_app/immutable/chunks/YIMjayOj.js"];
export const stylesheets = [];
export const fonts = [];
