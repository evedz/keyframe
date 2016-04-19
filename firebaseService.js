keyframe.service('firebase', function ($firebaseObject) {

    var ref = new Firebase("https://sizzling-torch-2202.firebaseio.com");

    this.db = $firebaseObject(ref);

});
