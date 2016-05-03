var keyframe = angular.module('keyframe', ['ngRoute', 'ngAnimate', 'firebase']);

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
        .when('/admin', {
            controller: 'admin',
            templateUrl: 'admin/admin.html'
        })
        .otherwise({
            redirectTo: '/'
        });

});

keyframe.controller('body', function ($rootScope) {

    $rootScope.menu = 0;

    $rootScope.toggleMenu = function () {
        $rootScope.menu == 0 ? $rootScope.menu = 1 : $rootScope.menu = 0;
    };

    $rootScope.$on('$routeChangeStart', function() {
        $rootScope.menu = 0;
    });

});
