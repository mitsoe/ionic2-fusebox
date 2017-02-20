const gulp = require('gulp');
const rename = require('gulp-rename');
const fsbx = require('fuse-box');
const DIST = 'www';

gulp.task('ionic-fonts', () => {
    return gulp.src('node_modules/ionic-angular/fonts/*')
        .pipe(rename({
            dirname: './fonts'
        }))
        .pipe(gulp.dest(DIST));
});

gulp.task('watch', ['ionic-fonts'], () => {
    gulp.watch('src/**/*.**', ['fusebox']);
});

gulp.task('default', ['watch'], () => {
    gulp.watch(`${DIST}/**/*`);
});