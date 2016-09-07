var gulp = require('gulp');
var gulpInject = require('gulp-inject');
var htmlhint = require("gulp-htmlhint");
var uglify = require('gulp-uglify');
var server = require('gulp-webserver');

gulp.task('copyPlugins:js', function(){
	var jsFiles = ['./bower_components/angular/angular.js', 
	'./bower_components/jquery/dist/jquery.min.js', 
	'./bower_components/bootstrap/dist/js/bootstrap.min.js',
    './bower_components/angular-route/angular-route.min.js',
    './bower_components/ngstorage/ngStorage.min.js']

	gulp.src(jsFiles)
	.pipe(gulp.dest('./src/assets/js'));
});

gulp.task('copyPlugins:css', function(){
	var cssFiles = ['./bower_components/bootstrap/dist/css/bootstrap.min.css']; 

	gulp.src(cssFiles)
	.pipe(gulp.dest('./src/assets/css'));
});

gulp.task('copyPlugins:fonts', function(){
	var fontFiles = ['./bower_components/bootstrap/dist/fonts/*.*',
	'./bower_components/font-awesome/fonts/*.*'];

	gulp.src(fontFiles)
		.pipe(gulp.dest('./src/assets/fonts'));
});

gulp.task('copyPlugins', ['copyPlugins:js', 'copyPlugins:css', 'copyPlugins:fonts']);

gulp.task('html', function(){
	gulp.src('./src/app/**/*.html')
		.pipe(htmlhint())
		.pipe(htmlhint.reporter());
});

gulp.task('server:start',['copyPlugins', 'html'], function() {
    gulp.src('./src')
    	.pipe(server({
	        directoryListing: false,
	        open: true
    	}));
});