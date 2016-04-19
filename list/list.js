keyframe.controller('list', function ($http, $scope, $firebaseObject) {

    var ref = new Firebase("https://sizzling-torch-2202.firebaseio.com");

    $scope.firebase = $firebaseObject(ref);

    console.log($scope.firebase);

    $scope.linkComposer = function (id) {
        return 'https://player.vimeo.com/video/' + id;
    };

});
