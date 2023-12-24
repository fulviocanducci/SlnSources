const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  entry: "./index.js",
  output: {
    filename: "digimon.js",
    path: path.resolve(__dirname + "/../../Web/wwwroot/js"),
  },
};
