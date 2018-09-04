const path = require('path')

module.exports = {
  entry: './index.js',
  mode: 'development',

  output: {
    filename: 'bundle.js',
    publicPath: ''
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    port: 3000
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [{
            loader: "style-loader"
        }, {
            loader: "css-loader"
        }, {
            loader: "sass-loader",
            options: {
                includePaths: [ path.resolve(__dirname, "./src/style") ]
            }
        }]
      }
    ]
  }
}
