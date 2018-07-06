var gulp = require('gulp');
var gulpDeploy = require('gulp-gh-pages');



const deploy = function () {
  return gulp.src("./dist/**/*")
    .pipe(gulpDeploy())
}


gulp.task('deploy', deploy)
