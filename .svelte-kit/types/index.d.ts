type DynamicRoutes = {
	
};

type Layouts = {
	"/": undefined;
	"/contact": undefined;
	"/schedule": undefined
};

export type RouteId = "/" | "/contact" | "/schedule";

export type RouteParams<T extends RouteId> = T extends keyof DynamicRoutes ? DynamicRoutes[T] : Record<string, never>;

export type LayoutParams<T extends RouteId> = Layouts[T] | Record<string, never>;

export type Pathname = "/" | "/contact" | "/schedule";

export type ResolvedPathname = `${"" | `/${string}`}${Pathname}`;

export type Asset = "/.nojekyll" | "/events.json" | "/favicon.svg" | "/robots.txt";