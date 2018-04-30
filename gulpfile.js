var gulp = require('gulp');
var less = require('gulp-less');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

//Less to css
gulp.task('less', function () {
	gulp.src('./src/styles/**/style.less')
			.pipe(less())
			.pipe(autoprefixer({
				browsers: ['last 2 versions'],
				cascade: false
			}))
			.pipe(gulp.dest('./dist/css/'));
});

//Sass to css
gulp.task('sass', function () {
	gulp.src('./src/styles/**/style.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('./dist/css/'));
});

//Less files change
gulp.task('less:watch', function () {
	gulp.watch('./src/styles/**/style.less', ['less']);
});

//Sass files change
gulp.task('sass:watch', function () {
	gulp.watch('./src/styles/**/style.scss', ['sass']);
	console.log('seen');
});
