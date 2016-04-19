//angular.module('oyycomua')
//
//    .controller('SingleController', function ($scope, $rootScope, $routeParams, $http, Users, $location) {
//
//        var id = $routeParams.id;
//        $scope.user = $rootScope.users[id];
//
//        $scope.updateUser = function (editUser) {
//
//            if ($scope.editUser.$valid) {
//                $http({
//                    method: 'GET',
//                    url: "http://oyy.com.ua/test_rest.php/update/id/" + id +
//                    "/?mobile="+editUser.mobile+
//                    "&mail=" + editUser.mail +
//                    "&firstName=" + editUser.firstName +
//                    "&middleName=" + editUser.middleName +
//                    "&lastName=" + editUser.lastName +
//                    "&birthDay=" + editUser.birthDay +
//                    "&sex=" + editUser.sex
//                }).then(function successCallback(response) {
//                    Users.getUsers();
//                    $location.path("/");
//                }, function errorCallback(response) {
//                    console.error(response);
//                });
//
//            }
//
//        };
//
//    });
