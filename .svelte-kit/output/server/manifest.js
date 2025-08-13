export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","events.json","favicon.svg","robots.txt"]),
	mimeTypes: {".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.C9jdQOKG.js",app:"_app/immutable/entry/app.xTGjSj3f.js",imports:["_app/immutable/entry/start.C9jdQOKG.js","_app/immutable/chunks/DQmq4Wm9.js","_app/immutable/chunks/D_mCy6-w.js","_app/immutable/chunks/CtsRHMLE.js","_app/immutable/chunks/TVeiyany.js","_app/immutable/chunks/yKMP1VSz.js","_app/immutable/entry/app.xTGjSj3f.js","_app/immutable/chunks/CtsRHMLE.js","_app/immutable/chunks/D_mCy6-w.js","_app/immutable/chunks/TVeiyany.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js'))
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
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/schedule",
				pattern: /^\/schedule\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
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
