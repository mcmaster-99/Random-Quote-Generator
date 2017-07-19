var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	connect = require('gulp-connect'),
	browserSync = require('browser-sync').create();

gulp.task('copy', function(){
	gulp.src('index.html')
	.pipe(gulp.dest('assets'))
});

gulp.task('sass', function(){
	gulp.src('styles/style.scss')
	.pipe(sass({style: 'expanded'}))
		.on('error', gutil.log)
	.pipe(gulp.dest('styles'))
});

gulp.task('js', function(){
	gulp.src('scripts/*.js')
	.pipe(uglify())
	.pipe(concat('script.js'))
	.pipe(gulp.dest('scripts'))
});

gulp.task('watch', function(){
	gulp.watch('*.html').on('change', browserSync.reload);
	gulp.watch('scripts/*.js').on('change', browserSync.reload);
	gulp.watch('styles/*.scss', ['sass']);
	gulp.watch('styles/*.css').on('change', browserSync.reload);

	browserSync.init({
		server: "./"
	});
});

gulp.task('default', ['watch']);