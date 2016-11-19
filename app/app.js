(function(){
	"use strict";
	angular.module("app", [
		"common",
		"feature"
		])
		.decorator("taskFormSrv", taskCreateLog);

	angular.element(document).ready(function() {
	angular.bootstrap(document, ["app"]);
	});
	
})();
