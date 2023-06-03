const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: {
    main: [ 
      'webpack-dev-server/client',
      './src/index.js',
      './styles/style.scss']
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          { loader: "style-loader", options: { injectType: "linkTag" } },
          { loader: "file-loader", options : { name: '[hash:base64:5]-[name].css' } },
          { loader: "sass-loader" }
        ],
      },
      // {
      //   test: /\.(png|j?g|svg|gif)?$/,
      //   use: 'file-loader?name=./images/[name].[ext]'
      //  }
    ],
  },
  devServer: {
    // compress: true,
    // port: 3000,
    // hot: true,
    // open: true
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({ template: "./index.html" }),
    // new CopyWebpackPlugin([ { from: 'src/assets', to: 'assets' } ])
    new CopyPlugin({
      patterns: [
        { from: "images", to: "images" },
        { from: "styles/normolize.css", to: "styles/normolize.css" },
      ],
    }),
  ]
};