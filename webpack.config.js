const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const DotenvWebpack = require('dotenv-webpack')

module.exports = (env, argv) => {
  return {
    mode: 'production',
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
          test: /\.(png|svg|jpg|jpeg|gif|ico|xlsx)$/,
          exclude: /node_modules/,
          use: ['file-loader?name=[name].[ext]'], // 이미지 파일을 모듈로 사용할 수 있도록 변환하는 역할을 하는 로더이다.
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
