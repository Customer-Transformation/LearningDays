export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","arrow-down-right.png","events.json","favicon.svg","logo.png","robots.txt","scheduleFriday.json","scheduleThursday.json"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DOLU21FE.js",app:"_app/immutable/entry/app.CvvDK_6v.js",imports:["_app/immutable/entry/start.DOLU21FE.js","_app/immutable/chunks/CvOAtVQ5.js","_app/immutable/chunks/D8KuB9Za.js","_app/immutable/entry/app.CvvDK_6v.js","_app/immutable/chunks/D8KuB9Za.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CEnQTbk_.js","_app/immutable/chunks/3SGMOMmq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
