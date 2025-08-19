export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","adwi.png","arrow-down-right.png","Bastu.png","cael.png","caev.png","calendar-07.png","Cornhole.png","dash.png","dinner.png","elbe.png","emis.png","events.json","fata.png","favicon.svg","Gym.png","hanger.png","leftArrow.png","lial.png","lime.png","logo.png","marker-06.png","Mingle.png","nama.png","nifo.png","plus-01.png","Pool.png","robots.txt","rooms.json","schedule.json","stva.png","ticket-02.png","travel.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.B-lPofui.js",app:"_app/immutable/entry/app.BagplsHQ.js",imports:["_app/immutable/entry/start.B-lPofui.js","_app/immutable/chunks/CEmlDZEv.js","_app/immutable/chunks/CUqsHGCE.js","_app/immutable/entry/app.BagplsHQ.js","_app/immutable/chunks/CUqsHGCE.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/3lHsriJB.js","_app/immutable/chunks/logIGzH1.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
