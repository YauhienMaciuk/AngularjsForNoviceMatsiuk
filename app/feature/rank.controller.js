(function() {
    "use strict";

    angular.module("feature")
        .controller("Rank", Rank);

    function Rank(rankSrv) {
        let $ctrl = this;
        Object.assign($ctrl, rankSrv);
    }
})();