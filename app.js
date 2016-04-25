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
        .when('/portfolio', {
            controller: 'portfolio',
            templateUrl: 'portfolio/portfolio.html'
        })
        .when('/contacts', {
            controller: 'contacts',
            templateUrl: 'contacts/contacts.html'
        })
        .when('/elmin', {
            controller: 'admin',
            templateUrl: 'admin/admin.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});
