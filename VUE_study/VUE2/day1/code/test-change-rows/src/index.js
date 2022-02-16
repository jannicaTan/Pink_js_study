// 1.使用ES6导入
import $ from 'jquery'
// 导入CSS,Less
import './css/index.css'
import './css/index.less'

// 2.定义入口函数
$(function(){
    $('li:odd').css('background-color','pink')
    $('li:even').css('background-color','yellow')
})