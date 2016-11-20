(function() {
    angular.module("feature")
        .controller("RandomCtrl", RandomCtrl);

    function RandomCtrl(randomSrv, symbols) {
        let $ctrl = this;
        $ctrl.text = randomSrv.randomText(symbols);
    }
})();