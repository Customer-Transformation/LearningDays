export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","arrow-down-right.png","Bastu.png","calendar-07.png","Cornhole.png","dinner.png","events.json","favicon.svg","Gym.png","hanger.png","leftArrow.png","logo.png","marker-06.png","Mingle.png","Pool.png","robots.txt","scheduleFriday.json","scheduleThursday.json","ticket-02.png","travel.png"]),
	mimeTypes: {".png":"image/png",".json":"application/json",".svg":"image/svg+xml",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.BXhR-Xon.js",app:"_app/immutable/entry/app.Bh7ulyW0.js",imports:["_app/immutable/entry/start.BXhR-Xon.js","_app/immutable/chunks/2UEVXUpj.js","_app/immutable/chunks/-G_sTfoH.js","_app/immutable/entry/app.Bh7ulyW0.js","_app/immutable/chunks/-G_sTfoH.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/CkVeZ-Zj.js","_app/immutable/chunks/CFYMEtxw.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
