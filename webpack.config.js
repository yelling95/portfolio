const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const DotenvWebpack = require('dotenv-webpack')

module.exports = (env, argv) => {
  return {
    mode: argv.mode,
    entry: './src/index.js',
    output: {
      path: path.resolve('./build'),
      filename: 'bundle.js',
      publicPath: '/',
    },
    resolve: {
      extensions: ['.jsx', '.js'],
    },
    devServer: {
      port: 3000,
      open: true,
      historyApiFallback: true,
    },
    module: {
      rules: [
        {
          test: /\.(js)x?$/,
          exclude: /node_module/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.s[ac]ss$/,
          use: ['style-loader', 'css-loader', 'sass-loader'],
        },
        {
          test: /\.(png|jpg|jpeg|gif|ico|xlsx)$/,
          exclude: /node_modules/,
          type: 'asset',
        },
        {
          test: /\.svg/,
          use: ['@svgr/webpack'],
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './public/index.html',
        favicon: './public/favicon.ico',
        templateParameters: {
          PUBLIC_PATH: '/',
        },
      }),
      new CopyPlugin({
        patterns: [
          {from: './src/assets', to: ''},
          {
            from: './public',
            to: '',
            globOptions: {
              ignore: ['**/index.html'],
            },
          },
        ],
      }),
      new DotenvWebpack({
        path:
          argv.mode === 'production'
            ? path.join(__dirname, '.env.production')
            : path.join(__dirname, '.env.development'),
      }),
    ],
  }
}
