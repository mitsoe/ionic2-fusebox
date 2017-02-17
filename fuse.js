//Not used, check gulpfile.js for configuration
const fsbx = require('fuse-box');

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

fuseBox.devServer('>main.ts', {
    port: 8100
});
