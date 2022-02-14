// 1.使用ES6导入
import $ from 'jquery'
// 2.定义入口函数
$(function(){
    $('li:odd').css('background-color','red')
    $('li:even').css('background-color','blue')
})