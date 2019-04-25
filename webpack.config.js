const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = (env, argv) => {
  config = {
    entry: {
      index: './src/js/index.ts',
      main: './src/styles/main.css'
    },
    devtool: argv.mode === 'development' ? 'source-map' : false,
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        },
        {
          test: /\.css$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: argv.mode === 'development' ? true : false
                }
              },
              {
                loader: 'postcss-loader',
                options: {
                  sourceMap: argv.mode === 'development' ? true : false
                }
              }
            ]
          }),
          exclude: /node_modules/
        },
        {
          test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
          use: [{
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'fonts/'
            }
          }]
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'),
    },
    // optimization: {
    //   splitChunks: {
    //     chunks: 'all'
    //   }
    // },


    plugins: [
      new ExtractTextPlugin({ // define where to save the file
        filename: '[name].bundle.css',
        // allChunks: true,
      }),

      new LiveReloadPlugin({
        appendScriptTag: true,
        hostname: 'localhost',
        protocol: 'http'
      })
    ]
  }

  return config;
};
