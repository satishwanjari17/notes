var myApp = angular.module("myApp", ['ui.router']);

myApp.config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    .state("/", {
        url: "/login",
        templateUrl: "login/login.html",
        controller: "loginAndHomeController as loginAndHome"
    })
    .state("home", {
        url:"/home",
        templateUrl: "home/home.html",
        controller: "loginAndHomeController as loginAndHome"
    })
    
    $urlRouterProvider.when("", "/login");
});