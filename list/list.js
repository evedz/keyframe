keyframe.controller('list', function ($http, $scope, firebase) {

    $scope.firebase = firebase.db;

    $scope.linkComposer = function (id) {
        return 'https://player.vimeo.com/video/' + id;
    };

});
