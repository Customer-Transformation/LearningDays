export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "LearningDays/_app",
	assets: new Set([".nojekyll","adwi.png","albe.png","arrow-down-right.svg","arrow-left.svg","Bastu.png","cael.png","caev.png","calendar.svg","Cornhole.png","daka.png","dinner.png","elbe.png","emis.png","fata.png","favicon.svg","Gym.png","hanger.svg","lial.png","lime.png","logo.svg","luggage.svg","marker.svg","Mingle.png","minus.svg","nama.png","nifo.png","plus.svg","Pool.png","robots.txt","roda.png","rooms.json","schedule.json","search.svg","stva.png","ticket.svg","travel.png","zipe.png"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".txt":"text/plain",".json":"application/json"},
	_: {
		client: {start:"_app/immutable/entry/start.CkMp6EE9.js",app:"_app/immutable/entry/app.DlbMPjHh.js",imports:["_app/immutable/entry/start.CkMp6EE9.js","_app/immutable/chunks/CiuW06sr.js","_app/immutable/chunks/jNx6r4rr.js","_app/immutable/entry/app.DlbMPjHh.js","_app/immutable/chunks/jNx6r4rr.js","_app/immutable/chunks/DsnmJJEf.js","_app/immutable/chunks/Dfez_mVo.js","_app/immutable/chunks/YQ14GtV-.js","_app/immutable/chunks/cKKT_LOb.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
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
