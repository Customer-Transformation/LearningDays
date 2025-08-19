export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","adwi.png","arrow-down-right.png","Bastu.png","cael.png","caev.png","calendar-07.png","Cornhole.png","dash.png","dinner.png","elbe.png","emis.png","events.json","fata.png","favicon.svg","Gym.png","hanger.png","leftArrow.png","lial.png","lime.png","logo.png","marker-06.png","Mingle.png","nama.png","nifo.png","plus-01.png","Pool.png","robots.txt","rooms.json","schedule.json","stva.png","ticket-02.png","travel.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.CVGVFhbr.js",app:"_app/immutable/entry/app.DfEsLDwE.js",imports:["_app/immutable/entry/start.CVGVFhbr.js","_app/immutable/chunks/n2bg34vv.js","_app/immutable/chunks/CUqsHGCE.js","_app/immutable/entry/app.DfEsLDwE.js","_app/immutable/chunks/CUqsHGCE.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/3lHsriJB.js","_app/immutable/chunks/logIGzH1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/agenda",
				pattern: /^\/agenda\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/crew",
				pattern: /^\/crew\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/dinner",
				pattern: /^\/dinner\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/explore",
				pattern: /^\/explore\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/menu",
				pattern: /^\/menu\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/travel",
				pattern: /^\/travel\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/travel/directions",
				pattern: /^\/travel\/directions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
