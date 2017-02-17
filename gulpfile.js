const gulp = require('gulp');
const rename = require('gulp-rename');
const fsbx = require('fuse-box');
const DIST = 'www';

gulp.task('index', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest(DIST));
});

gulp.task('ionic-fonts', () => {
    return gulp.src('node_modules/ionic-angular/fonts/*')
        .pipe(rename({
            dirname: './fonts'
        }))
        .pipe(gulp.dest(DIST));
});

gulp.task('watch', ['index', 'ionic-fonts'], () => {
    gulp.watch('src/**/*.**', ['fusebox', 'index']);
});

gulp.task('default', ['watch'], () => {
    gulp.watch(`${DIST}/**/*`);
});