const path = require('path');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        }
      },
      {
        test: /\.s?css/,
        // exclude: /node_modules/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      }
    ]
  },
  devServer: {
    host: 'localhost',
    port: 8080,
    publicPath: '/build/',
    proxy: {
       '/': 'http://localhost:3000'
     },
    hot: true,
  },
  resolve: { extensions: [".js", ".jsx"] },
};

