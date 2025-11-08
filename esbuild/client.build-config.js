const { build } = require('esbuild');
const fs = require('fs-extra');
const { yamlPlugin } = require('esbuild-plugin-yaml');

const generateBuild = async () => {
  if (fs.existsSync('./build/public/static')) await fs.rm('./build/public/static', { recursive: true })

  await build({
    bundle: true,
    sourcemap: true,
    loader: { '.svg': 'dataurl', '.png': 'dataurl' },
    define: {
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development',
      ),
    },
    entryPoints: ['./src/client/index.jsx'],
    incremental: true,
    minify: true,
    outdir: './build/public/static/',
    plugins: [yamlPlugin()],
  }).catch(() => process.exit(1))

    fs.copyFile('./src/client/index.html', './build/public/index.html', (err) => {
      if (err) throw err
    })
    fs.copyFile('./src/client/assets/images/favicon.ico', './build/public/favicon.ico', (err) => {
      if (err) throw err
    })
    fs.copySync('./src/client/assets/images/presentations', './build/public/presentation_assets', { overwrite: true },
                (err) => {
      if (err) throw err
    })

  process.exit(0)
};

generateBuild()
