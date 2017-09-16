const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, "assets", "index"),
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/i,
        use: [
          {
            loader: "babel-loader",
          }
        ],
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          }
        ]
      },
      {
        test:/\.png$/,
        use: [
          {
            loader: "url-loader?limit=10000"
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [
          {
            loader: "file-loader"
          }
        ] 
      },
      {
        test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, 
        use : [
          {
            loader: 'url-loader?limit=10000&mimetype=application/font-woff'
          }
        ]
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
        use : [
          {
            loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
          }
        ]
      },
      {
        test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
        use : [
          {
            loader: 'file-loader'
          }
        ]
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
        use : [
          {
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
          }
        ]
      }
    ]
  },
}
