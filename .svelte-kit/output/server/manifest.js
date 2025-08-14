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
		client: {start:"_app/immutable/entry/start.CSBW5OKG.js",app:"_app/immutable/entry/app.Dup0e62K.js",imports:["_app/immutable/entry/start.CSBW5OKG.js","_app/immutable/chunks/a0YlbyAN.js","_app/immutable/chunks/jasW3vi0.js","_app/immutable/chunks/YIMjayOj.js","_app/immutable/chunks/CtshnZf9.js","_app/immutable/entry/app.Dup0e62K.js","_app/immutable/chunks/YIMjayOj.js","_app/immutable/chunks/jasW3vi0.js","_app/immutable/chunks/DsnmJJEf.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
