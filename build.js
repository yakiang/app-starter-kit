const { nodeExternalsPlugin } = require('esbuild-node-externals');

// https://esbuild.github.io/api/
require('esbuild')
  .build({
    entryPoints: ['src/index.js'],
    bundle: true,
    outfile: 'dist/index.js',
    platform: 'node',
    target: 'node16',
    plugins: [
      nodeExternalsPlugin({
        dependencies: false,
      }),
    ],
  })
  .then(() => {
    console.log('build success');
  })
  .catch((err) => {
    console.log('Esbuild Error:');
    console.log(err);
    process.exit(1);
  });
