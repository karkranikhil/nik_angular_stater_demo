app.controller("loginCtrl", function ($scope, $location) {
    $scope.submitForm = function () {
        $location.path("/dashboard");
    }

    function init() {
        console.log("login");
        //var links = document.getElementsByTagName('link'), needCSS = true; for (var i = 0; i < links.length; i++) { if (links[i].href == "login/login.css") needCSS = false; } if (needCSS) { var ls = document.createElement('link'); ls.rel = "stylesheet"; ls.href = "login/login.css"; document.getElementsByTagName('head')[0].appendChild(ls); }
    }

    init()
});