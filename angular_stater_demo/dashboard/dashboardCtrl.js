app.controller("dashboardCtrl", function ($scope) {
    $scope.msg = "Welcome to Dasboard";

    function init() {
        console.log("dashboard");
        //var links = document.getElementsByTagName('link'), needCSS = true; for (var i = 0; i < links.length; i++) { if (links[i].href == "dashboard/dashboard.css") needCSS = false; } if (needCSS) { var ls = document.createElement('link'); ls.rel = "stylesheet"; ls.href = "dashboard/dashboard.css"; document.getElementsByTagName('head')[0].appendChild(ls); }

    }

    init();
});