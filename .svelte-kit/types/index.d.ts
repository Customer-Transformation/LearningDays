type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/agenda": undefined;
	"/crew": undefined;
	"/dinner": undefined;
	"/explore": undefined;
	"/menu": undefined;
	"/prep": undefined
};

export type RouteId = "/" | "/agenda" | "/crew" | "/dinner" | "/explore" | "/menu" | "/prep";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/agenda" | "/crew" | "/dinner" | "/explore" | "/menu" | "/prep";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/.nojekyll" | "/events.json" | "/favicon.svg" | "/robots.txt" | "/scheduleFriday.json" | "/scheduleThursday.json";