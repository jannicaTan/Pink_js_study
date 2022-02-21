// 1.使用ES6导入
import $ from "jquery";
// 导入CSS,Less
import "./css/index.css";
import "./css/index.less";

// 19-1 导入图片
// 19-2 给img标签的 src动态赋值
import logo from "./images/logo.jpg";
$(".box").attr("src", logo);

// 2.定义入口函数
$(function () {
  $("li:odd").css("background-color", "pink");
  $("li:even").css("background-color", "blue");
});

// 定义装饰器函数
function info(target) {
  target.info = "Person info.";
}

// 定义一个普通的类
// @info
// class Person {}

console.log(Person.info);
