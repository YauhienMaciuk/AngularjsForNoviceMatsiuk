(function() {
	"use strict";

	angular.module("feature")
		.directive("formCreateTask", formCreateTask);

	function formCreateTask(){
		return {
			restrict: "A",
			templateUrl: "html/formCreateTask.html"
		};
	}

})();