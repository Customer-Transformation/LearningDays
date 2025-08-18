type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/agenda": undefined;
	"/crew": undefined;
	"/dinner": undefined;
	"/explore": undefined;
	"/menu": undefined;
	"/travel": undefined;
	"/travel/directions": undefined
};

export type RouteId = "/" | "/agenda" | "/crew" | "/dinner" | "/explore" | "/menu" | "/travel" | "/travel/directions";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/agenda" | "/crew" | "/dinner" | "/explore" | "/menu" | "/travel" | "/travel/directions";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/.nojekyll" | "/arrow-down-right.png" | "/calendar-07.png" | "/events.json" | "/favicon.svg" | "/hanger.png" | "/logo.png" | "/marker-06.png" | "/robots.txt" | "/scheduleFriday.json" | "/scheduleThursday.json" | "/ticket-02.png" | "/travel.png";