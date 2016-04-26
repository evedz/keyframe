keyframe.controller('list', function ($scope) {

    $scope.menu = 0;

    $scope.toggleMenu = function () {
        $scope.menu == 0 ? $scope.menu = 1 : $scope.menu = 0;
    };

});
