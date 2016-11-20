(function() {
    "use strict";

    angular.module("feature")
        .factory("rankSrv", rankSrv);

    function rankSrv() {
        return {
            rank
        }

        function rank(rankNumber, $ctrl) {
            let star = "";
            if (angular.isNumber(rankNumber)) {
                switch (true) {
                    case (0 <= rankNumber && rankNumber < 101):
                        star = $ctrl.oneStar;
                        break;
                    case (100 < rankNumber && rankNumber < 201):
                        star = $ctrl.twoStar;
                        break;
                    case (200 < rankNumber && rankNumber < 501):
                        star = $ctrl.threeStar;
                        break;
                    case (500 < rankNumber && rankNumber < 1001):
                        star = $ctrl.fourStar;
                        break;
                    case (1000 < rankNumber):
                        star = $ctrl.fiveStar;
                        break;
                    default:
                        star = $ctrl.undefined;
                        break;

                }
            }
            $ctrl.star = star;
            return star;
        }
    }

})();