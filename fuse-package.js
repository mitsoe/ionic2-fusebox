const fsbx = require('fuse-box');

const config1 = {
    cache: false,
    homeDir: 'src/',
    outFile: './build/helloModule.js',
    standalone: false,
    sourcemap: false,
    package: {
        name: "myAngularModule",
        entry: "main.ts",
    },
    plugins: [
        fsbx.HTMLPlugin({ useDefault: false }),
        // fsbx.UglifyJSPlugin()
    ]
}
let fuseBox1 = fsbx.FuseBox.init(config1);
fuseBox1.bundle('>modules/hello-world/hello-world.module.ts');