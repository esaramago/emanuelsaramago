import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import BrowserSyncPlugin from 'browser-sync-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import CopyWebpackPlugin from 'copy-webpack-plugin'
import path, { dirname } from 'path'
import { fileURLToPath } from 'url'
import 'dotenv/config'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const SITE_URL = process.env.SITE_URL
const DIST_PATH = __dirname + '/dist/'
const SRC_PATH = __dirname + '/src/'

export default {
  entry: `${SRC_PATH}/main.js`,
  output: {
    path: path.resolve(__dirname, DIST_PATH),
    filename: '[name].js',
    clean: true
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `${SRC_PATH}/index.html`,
    }),

    new CopyWebpackPlugin({
        patterns: [
            { from: 'public' }
        ]
    }),

    new MiniCssExtractPlugin(),

    new BrowserSyncPlugin({
      proxy: SITE_URL,
      files: [
        `${SRC_PATH}/**/*`
      ],
      injectCss: true,
    }, { reload: false, }),

  ],
  module: {
    rules: [
      {
        test: /\.s?[c]ss$/i,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ],
      },
      {
        test: /\.(jpg|jpeg|png|gif|woff|woff2|eot|ttf|svg)$/i,
        use: 'url-loader?limit=1024',
      },
      {
        test: /\.ts?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
            },
          },
        ],
      },
    ]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
}