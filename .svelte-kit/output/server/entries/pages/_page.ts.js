import { a as asset } from "../../chunks/index2.js";
const load = async ({ fetch }) => {
  const res = await fetch(asset("/events.json"));
  if (!res.ok) throw new Error(`Failed to fetch events.json (${res.status})`);
  const { events } = await res.json();
  return { events };
};
export {
  load
};
