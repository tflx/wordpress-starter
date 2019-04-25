const path = require("path");
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /\.twig$/,
        loader: "twigjs-loader",
        include: path.resolve(__dirname, "../src/components"),
        query: {
          partialDirs: [
            path.join(__dirname, '../src/components')
          ]
        }
      }
    ],
  },
  plugins: [
    new ExtractTextPlugin({ // define where to save the file
      filename: '[name].bundle.css',
      // allChunks: true,
    })
  ]
};