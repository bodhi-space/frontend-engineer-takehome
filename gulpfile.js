(function() {
    "use strict";

    var gulp            = require('gulp');
    var include_file    = require('gulp-include-file');

    // Build Tasks
    gulp.task('create_bundles', function() {
        // TODO
    });

    gulp.task('copy', function () {
        gulp.src('./package.json')
            .pipe(gulp.dest('./dist'));
    });

})();