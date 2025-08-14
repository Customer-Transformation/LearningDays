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
		client: {start:"_app/immutable/entry/start.CUVMg8Wf.js",app:"_app/immutable/entry/app.DQTdsDo3.js",imports:["_app/immutable/entry/start.CUVMg8Wf.js","_app/immutable/chunks/BwtEN79c.js","_app/immutable/chunks/CJ6Pw6F5.js","_app/immutable/chunks/azbqQDXE.js","_app/immutable/chunks/hde5Umxb.js","_app/immutable/chunks/cysWGFCM.js","_app/immutable/entry/app.DQTdsDo3.js","_app/immutable/chunks/azbqQDXE.js","_app/immutable/chunks/CJ6Pw6F5.js","_app/immutable/chunks/hde5Umxb.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/DZlKBgMZ.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
