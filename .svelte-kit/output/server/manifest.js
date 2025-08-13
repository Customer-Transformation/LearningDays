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
		client: {start:"_app/immutable/entry/start.Ba_ROEzX.js",app:"_app/immutable/entry/app.BTlNNbI_.js",imports:["_app/immutable/entry/start.Ba_ROEzX.js","_app/immutable/chunks/BloqiZHy.js","_app/immutable/chunks/BmX6cc9D.js","_app/immutable/chunks/CEnWzjMi.js","_app/immutable/chunks/FLUXDTUD.js","_app/immutable/chunks/DrQt9GDK.js","_app/immutable/entry/app.BTlNNbI_.js","_app/immutable/chunks/CEnWzjMi.js","_app/immutable/chunks/BmX6cc9D.js","_app/immutable/chunks/FLUXDTUD.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/LearningDays/","/LearningDays/contact","/LearningDays/schedule"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
