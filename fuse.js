const fsbx = require('fuse-box');

const fuseBox = fsbx.FuseBox.init({
  cache    : false,
  homeDir  : 'src/',
  sourceMap: {
    bundleReference: 'app.js.map',
    outFile        : './www/app.js.map'
  },
  outFile  : './www/app.js',
  plugins  : [
    fsbx.CSSPlugin({write: true}),

    [
      fsbx.SassPlugin({outputStyle: 'compressed'}),
      fsbx.CSSPlugin()
    ],

    fsbx.TypeScriptHelpers(),
    fsbx.JSONPlugin(),
    fsbx.HTMLPlugin({useDefault: false})
  ]
});

fuseBox.devServer('>main.ts', {
  port: 8100
});
