

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.DhYFbI8K.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CxEST59w.js","_app/immutable/chunks/CtsRHMLE.js"];
export const stylesheets = [];
export const fonts = [];
