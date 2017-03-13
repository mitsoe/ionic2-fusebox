const fsbx = require('fuse-box');

const fuseBox = fsbx.FuseBox.init({
  cache: false,
  homeDir: 'src/',
  pkg: "mySuperLib",
  sourceMap: {
    bundleReference: 'app.js.map',
    outFile: './www/app.js.map',
  },
  outFile: './www/app.js',
  plugins: [
    [
      fsbx.SassPlugin({ outputStyle: 'compressed' }),
      fsbx.CSSPlugin()
    ],
    [
      fsbx.CSSResourcePlugin({
        inline: true
      }), fsbx.CSSPlugin()
    ],

    fsbx.TypeScriptHelpers(),
    fsbx.JSONPlugin(),
    fsbx.HTMLPlugin({ useDefault: false })
  ]
});

fuseBox.devServer('>main.ts', {
  port: 8100
});