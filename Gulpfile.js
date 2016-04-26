var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', ['jsVendor', 'cssVendor']);

gulp.task('jsVendor', function () {
    return gulp.src([
            'node_modules/angular/angular.min.js',
            'node_modules/angular-route/angular-route.min.js',
            //'node_modules/firebase/lib/firebase-web.js',
            //'node_modules/firebase-client/firebase-2.2.1.js',
            'node_modules/angularfire/dist/angularfire.min.js'
        ])
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest(''));
});

gulp.task('cssVendor', function () {
    return gulp.src([
            'node_modules/bootstrap/dist/css/bootstrap.min.css'
        ])
        .pipe(concat('vendor.css'))
        .pipe(gulp.dest(''));
});

//gulp.task('watch', ['less', 'scripts'], function() {
//    gulp.watch('src/**/*.js', ['scripts']);
//});
