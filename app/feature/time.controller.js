(function () {
	"use strict";

	angular.module("feature")
		.controller("Time", Time);

		function Time (timeSrv, $interval) {
			let $ctrl = this;
			$ctrl.time = timeSrv.showTime($interval, $ctrl);
		}
})();