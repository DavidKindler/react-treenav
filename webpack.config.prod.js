const webpack = require('webpack');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: [
    './tsx/index.tsx'
  ],
  output: {
    path: __dirname+"/dist",
    publicPath: '/dist',
    filename: 'bundle.js'
  },
  // Enable sourcemaps for debugging webpack's output.
  devtool: "source-map",
  module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
        ]
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', 'json']
  },
  plugins: [
    new webpack.DefinePlugin({ // <-- key to reducing React's size
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new UglifyJSPlugin()
    // new webpack.optimize.AggressiveMergingPlugin(), //Merge chunks 
    // new CompressionPlugin({
    //         asset: "[path].gz[query]",
    //         algorithm: "gzip",
    //         test: /\.(js|html)$/,
    //         threshold: 10240,
    //         minRatio: 0.8
    //     })
  ],
  // Uncomment if you do not want to include react and react-dom in bundle.js
  // externals:{
  //   "react": "React",
  //   "react-dom": "ReactDOM"
  // },
//   devServer: {
//     historyApiFallback: true,
//     contentBase: './',
//     port: 8000,
//     headers: { "Access-Control-Allow-Origin": "*" }
//   }
};
