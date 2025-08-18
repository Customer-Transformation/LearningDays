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

export type Asset = "/.nojekyll" | "/adwi.png" | "/arrow-down-right.png" | "/Bastu.png" | "/cael.png" | "/caev.png" | "/calendar-07.png" | "/Cornhole.png" | "/dinner.png" | "/elbe.png" | "/emis.png" | "/events.json" | "/fata.png" | "/favicon.svg" | "/Gym.png" | "/hanger.png" | "/leftArrow.png" | "/lial.png" | "/lime.png" | "/logo.png" | "/marker-06.png" | "/Mingle.png" | "/nama.png" | "/nifo.png" | "/Pool.png" | "/robots.txt" | "/rooms.json" | "/scheduleFriday.json" | "/scheduleThursday.json" | "/stva.png" | "/ticket-02.png" | "/travel.png";