var gulp = require('gulp');
var minifyHtml = require("gulp-minify-html");


gulp.task('html',function(){
	gulp.src('./index.html')
	.pipe(gulp.dest('build'));
});