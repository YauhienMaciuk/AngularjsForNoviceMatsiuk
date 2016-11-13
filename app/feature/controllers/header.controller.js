(function() {
	"use strict";

	angular.module("featureControllers")
		.controller("Header", Header);

		function Header(userInfo) {
			let $ctrl = this;
			$ctrl.userInfo = userInfo;
		}

})();