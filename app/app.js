(function() {
    "use strict";
    angular.module("app", [
            "common",
            "feature"
        ])
        .decorator("taskFormSrv", taskCreateLog)
        .decorator("taskTableSrv", taskPerformLog)
        .decorator("taskTableSrv", taskDeleteLog)
        .decorator("taskTableSrv", dateleAllClosedTasksLog)
        .decorator("taskTableSrv", myLog);

    angular.element(document).ready(function() {
        angular.bootstrap(document, ["app"]);
    });

})();