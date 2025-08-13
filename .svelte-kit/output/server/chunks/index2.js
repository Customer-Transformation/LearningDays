import { b as base, a as assets } from "./paths.js";
import { r as resolve_route } from "./routing.js";
function asset(file) {
  return (assets || base) + file;
}
function resolve(id, params) {
  return base + resolve_route(id, params);
}
export {
  asset as a,
  resolve as r
};
