const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    app: './src/index.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Mood tracker',
      template: './src/html/index.html',
      inject: false
    })
  ],
  resolve: { extensions: ["*", ".js", ".jsx", ".ts", ".tsx"] },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
   module: {
     rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              modules: {
                  localIdentName: "[name]__[local]___[hash:base64:5]",
              },
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: {
            loader: 'babel-loader'
        }
      }
    ]
  }
};