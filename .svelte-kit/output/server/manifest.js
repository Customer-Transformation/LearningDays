export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","arrow-down-right.png","events.json","favicon.svg","robots.txt","scheduleFriday.json","scheduleThursday.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B0VxRm4w.js",app:"_app/immutable/entry/app.PdTNVEMx.js",imports:["_app/immutable/entry/start.B0VxRm4w.js","_app/immutable/chunks/MtSJW0sH.js","_app/immutable/chunks/CmVSiT4v.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/kKHo1dyQ.js","_app/immutable/entry/app.PdTNVEMx.js","_app/immutable/chunks/CmVSiT4v.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/0lf3E6gj.js","_app/immutable/chunks/C3kECGm-.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/LearningDays/","/LearningDays/agenda","/LearningDays/crew","/LearningDays/dinner","/LearningDays/explore","/LearningDays/menu","/LearningDays/prep","/LearningDays/prep/directions"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
