const gulp = require('gulp');
const rename = require('gulp-rename');
const fsbx = require('fuse-box');
const browserSync = require('browser-sync').create();
const DIST = 'www';

const fuseBox = fsbx.FuseBox.init({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: `./${DIST}/bundle/app.js.map`,
    },
    outFile: `./${DIST}/bundle/app.js`,
    plugins: [
        [
            fsbx.SassPlugin({ outputStyle: 'compressed' }),
            fsbx.CSSResourcePlugin({
                inline: true
            }), fsbx.CSSPlugin()
        ],
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({ useDefault: false })
    ]
});

gulp.task('fusebox', () => {
    return fuseBox.bundle('>main.ts');
});

gulp.task('index', () => {
    return gulp.src('src/index.html')
        .pipe(gulp.dest(DIST));
});

gulp.task('ionic-css', () => {
    return gulp.src('node_modules/ionic-angular/**/*.css')
        .pipe(rename({
            basename: 'main',
        }))
        .pipe(gulp.dest(DIST));
});

gulp.task('ionic-fonts', () => {
    return gulp.src('node_modules/ionic-angular/fonts/*')
        .pipe(rename({
            dirname: './fonts'
        }))
        .pipe(gulp.dest(DIST));
});

gulp.task('assets', () => {
    return gulp.src('assets/**/*').pipe(gulp.dest(DIST));
});

gulp.task('watch', ['fusebox', 'index', 'ionic-css', 'ionic-fonts', 'assets'], () => {
    gulp.watch('src/**/*.**', ['fusebox', 'index', 'assets']);
});

gulp.task('default', ['watch'], () => {
    browserSync.init({
        server: { baseDir: DIST, directory: false },
        startPath: '/'
    });
    gulp.watch(`${DIST}/**/*`).on('change', browserSync.reload);
});