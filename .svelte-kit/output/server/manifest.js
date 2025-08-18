export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","adwi.png","arrow-down-right.png","Bastu.png","cael.png","caev.png","calendar-07.png","Cornhole.png","dinner.png","elbe.png","emis.png","events.json","fata.png","favicon.svg","Gym.png","hanger.png","leftArrow.png","lial.png","lime.png","logo.png","marker-06.png","Mingle.png","nama.png","nifo.png","Pool.png","robots.txt","rooms.json","scheduleFriday.json","scheduleThursday.json","stva.png","ticket-02.png","travel.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.yZKpDlCL.js",app:"_app/immutable/entry/app.B7bQCXiS.js",imports:["_app/immutable/entry/start.yZKpDlCL.js","_app/immutable/chunks/U0-TUtSR.js","_app/immutable/chunks/8zu9nUTn.js","_app/immutable/entry/app.B7bQCXiS.js","_app/immutable/chunks/8zu9nUTn.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/93T7QoHZ.js","_app/immutable/chunks/aq0Zgjak.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		remotes: {
			
		},
		routes: [
			
		],
		prerendered_routes: new Set(["/LearningDays/","/LearningDays/agenda","/LearningDays/crew","/LearningDays/dinner","/LearningDays/explore","/LearningDays/menu","/LearningDays/travel","/LearningDays/travel/directions"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
