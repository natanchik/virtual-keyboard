const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const isDev = process.env.NODE_ENV === 'development'

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './main.js',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist')
  },  
  devServer: {
    port: 5000,
    hot: isDev
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',  
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [{ 
        from: path.resolve(__dirname, './src/favicon.ico'), 
        to: path.resolve(__dirname, 'dist')
      }],
    }), 
    new MiniCssExtractPlugin({
      filename: filename('css'),
    }) 
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ['file-loader']        
      }      
    ]
  }
}