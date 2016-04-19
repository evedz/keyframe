var keyframe = angular.module('keyframe', ['ngRoute', 'firebase']);

keyframe.config(function ($routeProvider, $sceDelegateProvider) {

    $sceDelegateProvider.resourceUrlWhitelist([
        'self',
        'https://player.vimeo.com/video/**'
    ]);

    $routeProvider
        .when('/', {
            controller: 'list',
            templateUrl: 'list/list.html'
        })
        .when('/single/:id', {
            controller: 'single',
            templateUrl: 'single/single.html'
        })
        .when('/elmin', {
            controller: 'admin',
            templateUrl: 'admin/admin.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});

var myDataRef = new Firebase('https://y09j38chpvl.firebaseio-demo.com/');

myDataRef.set('User ' + "MAX" + ' says ' + "HELLO");
