const gulp = require('gulp');
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
            fsbx.CSSPlugin({ write: true, outFile: `${DIST}/main.css` })
        ],
        //fsbx.TypeScriptHelpers,
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({ useDefault: false })
    ]
});

gulp.task('fusebox', () => {
    return fuseBox.bundle('>main.ts');
});

gulp.task('index', () => {
    return gulp.src('src/index.html').pipe(gulp.dest(DIST));
});

gulp.task('assets', () => {
    return gulp.src('assets/**/*').pipe(gulp.dest(DIST));
});

gulp.task('watch', ['fusebox', 'index', 'assets'], () => {
    gulp.watch('src/**/*.**', ['fusebox', 'index', 'assets']);
});

gulp.task('default', ['watch'], () => {
    browserSync.init({
        server: { baseDir: DIST, directory: false },
        startPath: '/'
    });
    gulp.watch(`${DIST}/**/*`).on('change', browserSync.reload);
});