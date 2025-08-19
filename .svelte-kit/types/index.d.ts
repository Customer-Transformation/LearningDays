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

export type Asset = "/.nojekyll" | "/adwi.png" | "/albe.png" | "/arrow-down-right.png" | "/arrow-down-right.svg" | "/arrow-left.svg" | "/Bastu.png" | "/cael.png" | "/caev.png" | "/calendar-07.png" | "/calendar.svg" | "/Cornhole.png" | "/daka.png" | "/dash.png" | "/dinner.png" | "/elbe.png" | "/emis.png" | "/events.json" | "/fata.png" | "/favicon.svg" | "/Gym.png" | "/hanger.png" | "/hanger.svg" | "/leftArrow.png" | "/lial.png" | "/lime.png" | "/logo.png" | "/logo.svg" | "/luggage.svg" | "/marker-06.png" | "/marker.svg" | "/Mingle.png" | "/nama.png" | "/nifo.png" | "/plus-01.png" | "/Pool.png" | "/robots.txt" | "/roda.png" | "/rooms.json" | "/schedule.json" | "/search.svg" | "/stva.png" | "/ticket-02.png" | "/ticket.svg" | "/travel.png" | "/zipe.png";