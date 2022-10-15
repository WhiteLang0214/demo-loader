const path = require('path')

module.exports = {
  mode: "nonde", // 打包出来的结果是最原始的方式
  entry: "./src/main.js",
  output: {
    filename: "bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.md$/,
        use: [ // 自下向上执行
          "html-loader",
          "./markdown-loader"
        ]
      }
    ]
  }
}