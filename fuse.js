//Not used, check gulpfile.js for configuration

const fsbx = require('fuse-box');

const fuseBox = fsbx.FuseBox.init({
    homeDir: 'src/',
    sourceMap: {
        bundleReference: 'app.js.map',
        outFile: './dist/app.js.map',
    },
    outFile: './dist/app.js',
    plugins: [
        [
            fsbx.SassPlugin({ outputStyle: 'compressed' }),
            fsbx.CSSResourcePlugin({
                inline: true
            }), fsbx.CSSPlugin()
        ],
        fsbx.TypeScriptHelpers(),
        fsbx.JSONPlugin(),
        fsbx.HTMLPlugin({ useDefault: false }),
        fsbx.ImageBase64Plugin()
    ]
});

fuseBox.devServer('>app/main.ts', {
    port: 8100
});
