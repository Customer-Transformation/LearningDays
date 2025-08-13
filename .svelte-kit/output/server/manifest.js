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
		client: {start:"_app/immutable/entry/start.BCVOjK_n.js",app:"_app/immutable/entry/app.I5D0vyMl.js",imports:["_app/immutable/entry/start.BCVOjK_n.js","_app/immutable/chunks/sovl0vNR.js","_app/immutable/chunks/BcTUKEQ-.js","_app/immutable/chunks/BT6KussZ.js","_app/immutable/chunks/ysPryp9P.js","_app/immutable/chunks/-QX5y4Md.js","_app/immutable/chunks/SQlIY1xE.js","_app/immutable/entry/app.I5D0vyMl.js","_app/immutable/chunks/BT6KussZ.js","_app/immutable/chunks/ysPryp9P.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BcTUKEQ-.js","_app/immutable/chunks/-QX5y4Md.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/LearningDays/","/LearningDays/events.json","/LearningDays/contact","/LearningDays/schedule"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
