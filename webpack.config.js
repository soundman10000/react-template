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
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: "url-loader?limit=10000&mimetype=application/font-woff"
        }
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: {
          loader: "file-loader"
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
