// Ionic Starter App
// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic', 'starter.controllers', 'ionic-modal-select', 'ionic-datepicker']);

app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
})

app.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('app', {
            url: '/app',
            abstract: true,
            templateUrl: 'templates/menu.html',
            controller: 'AppCtrl'
        })

        .state('app.dashboard', { 
            url: '/dashboard', 
            views: {
                'menuContent': {
                    templateUrl: 'templates/dashboard.html',
                    controller: 'DashboardCtrl'
                }
            }
        })

        .state('app.tentang-nasabah', {
            url: '/tentang-nasabah',
            views: {
                'menuContent': {
                    templateUrl: 'templates/tentang-nasabah.html',
                    controller: 'TentangNasabahCtrl'
                }
            }
        })

        .state('app.product', {
            url: '/product', 
            views: {
                'menuContent': {
                    templateUrl: 'templates/product.html',
                    controller: 'ProductCtrl'
                }
            }
        });

    $urlRouterProvider.otherwise('/app/dashboard');
});