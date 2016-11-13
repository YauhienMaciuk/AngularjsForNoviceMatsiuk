(function() {
	"use strict";
	
	angular.module("feature")
		.controller("Task", Task);

		function Task(userInfo, taskService, allTasks) {
			let $ctrl = this;
			$ctrl.userInfo = userInfo;
			$ctrl.allTasks = allTasks;
			Object.assign($ctrl, taskService);
		}

})();