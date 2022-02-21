// 作用：将复制出来的页面赋上脚本，不需要手动在index.html中加上js文件了
// 1. 导入 html-webpack-plugin 这个插件，得到插件的构造函数
const HtmlPlugin = require("html-webpack-plugin");
// 2. new 构造函数，创建插件的实例对象
const htmlPlugin = new HtmlPlugin({
  // 指定要复制哪个页面
  template: "./src/index.html",
  // 指定复制出来的文件名和存放路径
  filename: "./index.html",
});

// 初始配置：使用 Node.js 中的导出语法，向外导出一个 webpack 的配置对象
module.exports = {
  // 初始配置项
  // 结论：开发时候一定要用 development，因为追求的是打包的速度，而不是体积；反过来，发布上线的时候一定能要用 production，因为上线追求的是体积小，而不是打包速度快！
  //   mode: "development",
  mode: "development",
  // sourceMap
  // 开发调试阶段，把 devtool 的值设置为 eval-source-map。实际发布的时候，建议大家把 devtool 的值设置为 nosources-source-map 或直接关闭 SourceMap
  devtool: "eval-source-map",
  // devtool: "nosources-source-map",

  // 3. 插件的数组，将来 webpack 在运行时，会加载并调用这些插件
  plugins: [htmlPlugin],

  // 首次打包成功后，自动打开浏览器
  devServer: {
    open: true,
    // 在 http 协议中，如果端口号是 80，则可以被省略
    port: 81,
  },

  module: {
    // loader加载器规则
    rules: [
      // 定义了不同模块对应的 loader
      { test: /\.css$/, use: ["style-loader", "css-loader"] },
      { test: /\.less$/, use: ["style-loader", "css-loader"] },
      // 处理图片文件的 loader,limit参数限制为图片大小，大于设置数则不使用base64转换
      // npm i url-loader file-loader -D
      { test: /\.jpg|png|gif$/, use: "url-loader?limit=470" },
      // 使用 babel-loader 处理高级的 JS 语法
      // npm i babel-loader @babel/core @babel/plugin-proposal-decorators -D
      { test: /\.js$/, use: "babel-loader", exclude: /node_modules/ },
    ],
  },
};
