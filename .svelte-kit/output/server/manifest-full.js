export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","adwi.png","albe.png","arrow-down-right.svg","arrow-left.svg","Bastu.png","cael.png","caev.png","calendar.svg","Cornhole.png","daka.png","dinner.png","elbe.png","emis.png","fata.png","favicon.svg","feedbackButtonA.svg","feedbackButtonb.svg","Gym.png","hanger.svg","lial.png","lime.png","logo.svg","luggage.svg","marker.svg","Mingle.png","minus.svg","nama.png","nifo.png","people.json","plus.svg","Pool.png","robots.txt","roda.png","schedule.json","search.svg","stva.png","ticket.svg","travel.png","zipe.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.VQl3A5en.js",app:"_app/immutable/entry/app.DNFDHyIt.js",imports:["_app/immutable/entry/start.VQl3A5en.js","_app/immutable/chunks/B4BI8QYq.js","_app/immutable/chunks/Dkip7DKy.js","_app/immutable/entry/app.DNFDHyIt.js","_app/immutable/chunks/Dkip7DKy.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/C-tCCAWz.js","_app/immutable/chunks/Bc3n5dM6.js","_app/immutable/chunks/CYacHP2t.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
