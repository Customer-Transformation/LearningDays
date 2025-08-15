export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","events.json","favicon.svg","robots.txt","scheduleFriday.json","scheduleThursday.json"]),
	mimeTypes: {".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.C0QOGwxj.js",app:"_app/immutable/entry/app.CIXNmj-q.js",imports:["_app/immutable/entry/start.C0QOGwxj.js","_app/immutable/chunks/QXjQ3xjf.js","_app/immutable/chunks/9HigdQ3-.js","_app/immutable/chunks/Dyf8U2Jx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/B-9RPjKj.js","_app/immutable/chunks/Dp5WQ9kC.js","_app/immutable/entry/app.CIXNmj-q.js","_app/immutable/chunks/Dyf8U2Jx.js","_app/immutable/chunks/DIeogL5L.js","_app/immutable/chunks/9HigdQ3-.js","_app/immutable/chunks/B-9RPjKj.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/LearningDays/","/LearningDays/agenda","/LearningDays/crew","/LearningDays/dinner","/LearningDays/explore","/LearningDays/menu","/LearningDays/prep","/LearningDays/welcome"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
