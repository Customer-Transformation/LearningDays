import { a as assets, b as base } from "./paths.js";
function asset(file) {
  return (assets || base) + file;
}
export {
  asset as a
};
