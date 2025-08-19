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

export type Asset = "/.nojekyll" | "/adwi.png" | "/albe.png" | "/arrow-down-right.svg" | "/arrow-left.svg" | "/Bastu.png" | "/cael.png" | "/caev.png" | "/calendar.svg" | "/Cornhole.png" | "/daka.png" | "/dinner.png" | "/elbe.png" | "/emis.png" | "/fata.png" | "/Gym.png" | "/hanger.svg" | "/lial.png" | "/lime.png" | "/logo.svg" | "/luggage.svg" | "/marker.svg" | "/Mingle.png" | "/minus.svg" | "/nama.png" | "/nifo.png" | "/plus.svg" | "/Pool.png" | "/robots.txt" | "/roda.png" | "/rooms.json" | "/schedule.json" | "/search.svg" | "/stva.png" | "/ticket.svg" | "/travel.png" | "/zipe.png";