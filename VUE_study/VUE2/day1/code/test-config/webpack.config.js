const HtmlPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlPlugin({
  // 指定要复制哪个页面
  template: "./src/index.html",
  // 指定复制出来的文件名和存放路径
  filename: "./index.html",
});

module.exports = {
  mode: "development",
  plugins:[htmlPlugin],
  // 首次打包成功后，自动打开浏览器
  devServer: {
    open: true,
    // 在 http 协议中，如果端口号是 80，则可以被省略
    port: 81,
  },
};
