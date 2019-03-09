const webpack = require('webpack');
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const paths = {
  source: path.join(__dirname, '../src'),
  assets: path.join(__dirname, '../src/assets/'),
  css: path.join(__dirname, '../src/css/'),
  fonts: path.join(__dirname, '../src/assets/fonts/'),
  images: path.join(__dirname, '../src/assets/img'),
  javascript: path.join(__dirname, '../src/js'),
  svg: path.join(__dirname, '../src/assets/svg'),
  build: path.join(__dirname, '../build'),
};

const NODE_ENV = process.env.NODE_ENV || 'development';
const SERVER_RENDER = process.env.SERVER_RENDER === 'true';
const HYDRATE = process.env.HYDRATE === 'true';
const IS_DEVELOPMENT = NODE_ENV === 'development';
const IS_PRODUCTION = NODE_ENV === 'production';

// ----------
// PLUGINS
// ----------

// Shared plugins
const plugins = [
  // Extracts CSS to a file
  new MiniCssExtractPlugin({
    filename: IS_PRODUCTION ? 'client/style.[contenthash].css' : 'client/style.css',
  }),
  // Injects env variables to our app
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
      SERVER_RENDER: JSON.stringify(SERVER_RENDER) === 'true',
      HYDRATE: JSON.stringify(HYDRATE) === 'true',
    },
  }),
];

if (IS_DEVELOPMENT) {
  // Shared development plugins
  plugins.push(
    // Enables pretty names instead of index
    new webpack.NamedModulesPlugin()
  );
} else {
  plugins.push(
    // Hashes are based on the relative path of the module
    new webpack.HashedModuleIdsPlugin({
      hashFunction: 'sha256',
      hashDigest: 'hex'
    })
  )
}

// ----------
// RULES
// ----------

// Shared rules
const rules = [
  // Babel loader
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  // SVG are imported as react components
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'babel-loader',
      },
      {
        loader: 'react-svg-loader',
        options: {
          svgo: {
            plugins: [
              {
                removeTitle: true,
              },
            ],
            floatPrecision: 3,
          },
        },
      },
    ],
    include: paths.svg,
  },
  // Images
  {
    test: /\.(png|gif|jpg|svg)$/,
    include: paths.images,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: IS_PRODUCTION ? 'client/assets/[name].[hash].[ext]': 'client/assets/[name].[ext]',
        },
      },
    ],
  },
  // Fonts
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    include: paths.fonts,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: IS_PRODUCTION ? 'client/fonts/[name].[hash].[ext]' : 'client/fonts/[name].[ext]',
        },
      },
    ],
  },
];


// For both production and server ExtractTextPlugin is used
if (IS_PRODUCTION || SERVER_RENDER) {
  rules.push(
    {
      test: /\.(sc|c)ss$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            minimize: true,
          },
        },
        'postcss-loader',
        'sass-loader',
      ],
    }
  );
} else {
  rules.push(
    {
      test: /\.(sc|c)ss$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'sass-loader',
          options: { sourceMap: true },
        },
      ],
    }
  );
}

// ----------
// RESOLVE
// ----------

const resolve = {
  extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
  modules: [
    'node_modules',
    paths.javascript,
    paths.assets,
    paths.css,
  ],
};

// ----------
// CLI STATS
// ----------

const stats = {
  colors: true,
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
};

module.exports = {
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  NODE_ENV,
  SERVER_RENDER,
  paths,
  plugins,
  resolve,
  rules,
  stats,
};
