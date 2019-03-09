const webpack = require('webpack');
const path = require('path');
const ManifestPlugin = require('webpack-manifest-plugin');

const {
  paths,
  rules,
  plugins,
  resolve,
  stats,
  IS_PRODUCTION,
  IS_DEVELOPMENT,
} = require('./webpack/config');

const devServer = require('./webpack/dev-server').devServer;

const HtmlWebpackPlugin = require('html-webpack-plugin');

plugins.push(
  new ManifestPlugin(),
  // Builds index.html from template
  new HtmlWebpackPlugin({
    template: path.join(paths.source, 'index.html'),
    path: paths.build,
    filename: 'index.html',
    minify: {
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true,
      removeComments: true,
      useShortDoctype: true,
    },
  }),
);

if (IS_DEVELOPMENT) {
  // Development plugins
  plugins.push(
    // Enables HMR
    new webpack.HotModuleReplacementPlugin(),
    // Don't emmit build when there was an error while compiling
    // No assets are emitted that include errors
    new webpack.NoEmitOnErrorsPlugin()
  );
}

// Webpack config
module.exports = {
  mode: IS_PRODUCTION ? 'production' : 'development',
  devtool: IS_PRODUCTION ? false : 'cheap-eval-source-map',
  context: paths.javascript,
  watch: !IS_PRODUCTION,
  entry: {
    client: path.join(paths.javascript, 'client.js'),
  },
  output: {
    path: paths.build,
    publicPath: '/',
    filename: IS_PRODUCTION ? `client/[name].[contenthash].js` : 'client/[name].js',
  },
  module: {
    rules,
  },
  plugins,
  resolve,
  stats,
  devServer,
  optimization: {
    // Minification
    minimize: IS_PRODUCTION,
    // Creates vendor chunk from modules coming from node_modules folder
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: 'initial',
          test: path.resolve(__dirname, 'node_modules'),
          name: 'vendor',
          filename: IS_PRODUCTION ? 'client/[name].[contenthash].js' : 'client/[name].js',
          enforce: true,
        },
      },
    },
  },
};
