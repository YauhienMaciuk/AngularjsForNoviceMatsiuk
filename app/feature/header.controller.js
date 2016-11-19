(function() {
	"use strict";

	angular.module("feature")
		.controller("Header", Header);

		function Header(userInfo) {
			let $ctrl = this;
			$ctrl.userInfo = userInfo;
		}

})();