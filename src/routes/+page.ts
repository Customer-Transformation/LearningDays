import { asset } from '$app/paths';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch }) => {
	// asset() -> correct URL for /static/events.json
	const res = await fetch(asset('/events.json')); // no leading slash
	if (!res.ok) throw new Error(`Failed to fetch events.json (${res.status})`);

	// your file shape is { "events": [...] }
	const { events } = await res.json();
	return { events };
};