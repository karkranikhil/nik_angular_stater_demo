var app = angular.module("myApp", ["ngRoute"]);

app.run(function ($location) {
    $location.path('/')
});

app.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "login/login.html",
        controller: "loginCtrl"

    })
    .when("/dashboard", {
        templateUrl: "dashboard/dashboard.html",
        controller: "dashboardCtrl"
    })
    .otherwise({ redirectTo: '/' })
});