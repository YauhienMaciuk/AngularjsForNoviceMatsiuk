(function() {
    "use strict";

    angular.module("feature")
        .service("rankSrv", rankSrv);

    function rankSrv() {
        return {
            rank
        }

        function rank(rankNumber, $ctrl) {
            let star = "";
            if (angular.isNumber(rankNumber)) {
                switch (true) {
                    case (0 <= rankNumber && rankNumber < 101):
                        star = "*";
                        break;
                    case (100 < rankNumber && rankNumber < 201):
                        star = "**";
                        break;
                    case (200 < rankNumber && rankNumber < 501):
                        star = "***";
                        break;
                    case (500 < rankNumber && rankNumber < 1001):
                        star = "****";
                        break;
                    case (1000 < rankNumber):
                        star = "*****";
                        break;
                    default:
                        star = "undefined";
                        break;

                }
            }
            $ctrl.star = star;
            return star;
        }
    }

})();