var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCss = require('gulp-clean-css');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync');

var paths = {
    sass: ['./scss/**/*.scss']
};

gulp.task('default', ['sass']);

gulp.task('sass', function(done) {
    // gulp.src('./scss/style.scss')
    //     .pipe(sass())
    //     .on('error', sass.logError)
    //     .pipe(gulp.dest('./www/css/'))
    //     .pipe(cleanCss({
    //         keepSpecialComments: 0
    //     }))
    //     .pipe(autoprefixer())
    //     .pipe(rename({
    //         extname: '.min.css'
    //     }))
    //     .pipe(gulp.dest('./www/css/'))
    //     // Reloading the stream
    //     .pipe(browserSync.reload({
    //         stream: true
    //     }))
    //     .on('end', done);

    return gulp.src('./scss/style.scss')
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./www/css/'))
        // Reloading the stream
        .pipe(browserSync.reload({
          stream: true
        }));

});

gulp.task('browserSync', function() {
    browserSync({
        server: {
            baseDir: 'www'
        }
    })
});

gulp.task('default', ['sass', 'browserSync'], function() {
    gulp.watch(paths.sass, ['sass']);
});