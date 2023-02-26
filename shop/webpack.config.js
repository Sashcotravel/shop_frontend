const webpack = require('webpack');
const common = require('./webpack.common')
const merge = require('webpack-merge')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const CompressionPlugin = require('compression-webpack-plugin')


module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(),
      new TerserPlugin({
        terserOptions: {
          compress: {
            drop_console: true, // remove console statement
          },
        },
      }),
    ],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'cache-loader',
          'thread-loader',
          'babel-loader'
        ],
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, '../src'),
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg|webp)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: {
            maxSize: 25 * 1024, // 25kb
          }
        },
        generator: {
          filename: 'images/[contenthash][ext][query]',
        },
      },
    ]
  },
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/chunk-[contenthash].js',
    clean: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new BundleAnalyzerPlugin(),
    new CompressionPlugin({ algorithm: 'gzip', threshold: 10240, minRatio: 0.8 }),
  ],
  devServer: {
    hot: true
  }
})

module.exports = {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map'
}

module.exports = {
  mode: 'production',
  devtool: 'nosources-source-map'
}