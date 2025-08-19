export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","adwi.png","albe.png","arrow-down-right.png","arrow-down-right.svg","arrow-left.svg","Bastu.png","cael.png","caev.png","calendar-07.png","calendar.svg","Cornhole.png","daka.png","dash.png","dinner.png","elbe.png","emis.png","events.json","fata.png","favicon.svg","Gym.png","hanger.png","hanger.svg","leftArrow.png","lial.png","lime.png","logo.png","logo.svg","luggage.svg","marker-06.png","marker.svg","Mingle.png","nama.png","nifo.png","plus-01.png","Pool.png","robots.txt","roda.png","rooms.json","schedule.json","search.svg","stva.png","ticket-02.png","ticket.svg","travel.png","zipe.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".json":"application/json",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.DVOIS_BH.js",app:"_app/immutable/entry/app.BWL5ecC6.js",imports:["_app/immutable/entry/start.DVOIS_BH.js","_app/immutable/chunks/BpKOQssX.js","_app/immutable/chunks/BsNi6Uy5.js","_app/immutable/entry/app.BWL5ecC6.js","_app/immutable/chunks/BsNi6Uy5.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/BMdzP_H-.js","_app/immutable/chunks/nRAefTaj.js","_app/immutable/chunks/x7PuOBDj.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
