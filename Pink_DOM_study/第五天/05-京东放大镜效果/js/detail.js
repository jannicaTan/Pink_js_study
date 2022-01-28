/* 
  整个案例可以分为三个功能模块:
1 鼠标经过小图片盒子 ，黄色的遮挡层和大图片盒子显示，离开即隐藏2个盒子功能
    display:block/none
2 黄色的遮挡层跟随鼠标功能:
    先获取鼠标坐标，再获取left/top值
3 移动黄色遮挡层，大图片跟随移动
*/
// 预先加载css/html
window.addEventListener("load", function () {
  var preview_img = document.querySelector(".preview_img");
  var mask = document.querySelector(".mask");
  var big = document.querySelector(".big");
  // 1.显示/隐藏
  // 1.1 鼠标经过
  preview_img.addEventListener("mouseover", function () {
    mask.style.display = "block";
    big.style.display = "block";
  });
  // 1.2 鼠标离开
  preview_img.addEventListener("mouseout", function () {
    mask.style.display = "none";
    big.style.display = "none";
  });
  // 2.黄色的遮挡层跟随鼠标功能:
  preview_img.addEventListener("mousemove", function (e) {
    //  2.1 计算鼠标在图片盒子内的坐标:鼠标到页面距离-图片盒子到页面的距离
    // 注意:计算距离的时候要看其父层是否为绝对定位，如果是,则鼠标只能到其父层 计算公式需要重新写
    var x = e.pageX - this.offsetLeft;
    var y = e.pageY - this.offsetTop;
    //  2.2 获得黄色遮盖层的坐标：
    // maskX/maskY: 鼠标坐标-当前展示层的宽度或高度/2（这样可以使坐标始终在中间展示)
    // maskMaxX/maskMaxY:图片层的宽度-遮罩层宽度   -------此为鼠标移动的最大距离,防止遮罩层移动出框
    var maskX = x - mask.offsetWidth / 2;
    var maskY = y - mask.offsetHeight / 2;
    var maskMaxX =this.offsetWidth-mask.offsetWidth;
    var maskMaxY=this.offsetHeight-mask.offsetHeight;
    if (maskX <= 0) {
        maskX=0;
    } else if (maskX >= maskMaxX) {
        maskX=maskMaxX
    }
    if (maskY <= 0) {
        maskY=0;
    } else if (maskY >= maskMaxY) {
        maskY=maskMaxY
    }
    mask.style.left = maskX + "px";
    mask.style.top = maskY + "px";
    // 
    //遮挡层移动距离/遮挡层MAX =大图片移动距离/大图片MAX----->大图片移动距离=遮挡层移动距离*大图片MAX/遮挡层MAX
    
  });
});
// window.addEventListener('load', function() {
//     var preview_img = document.querySelector('.preview_img');
//     var mask = document.querySelector('.mask');
//     var big = document.querySelector('.big');
//     // 1. 当我们鼠标经过 preview_img 就显示和隐藏 mask 遮挡层 和 big 大盒子
//     preview_img.addEventListener('mouseover', function() {
//         mask.style.display = 'block';
//         big.style.display = 'block';
//     })
//     preview_img.addEventListener('mouseout', function() {
//             mask.style.display = 'none';
//             big.style.display = 'none';
//         })
//         // 2. 鼠标移动的时候，让黄色的盒子跟着鼠标来走
//     preview_img.addEventListener('mousemove', function(e) {
//         // (1). 先计算出鼠标在盒子内的坐标
//         var x = e.pageX - this.offsetLeft;
//         var y = e.pageY - this.offsetTop;
//         // console.log(x, y);
//         // (2) 减去盒子高度 300的一半 是 150 就是我们mask 的最终 left 和top值了
//         // (3) 我们mask 移动的距离
//         var maskX = x - mask.offsetWidth / 2;
//         var maskY = y - mask.offsetHeight / 2;
//         // (4) 如果x 坐标小于了0 就让他停在0 的位置
//         // 遮挡层的最大移动距离
//         var maskMax = preview_img.offsetWidth - mask.offsetWidth;
//         if (maskX <= 0) {
//             maskX = 0;
//         } else if (maskX >= maskMax) {
//             maskX = maskMax;
//         }
//         if (maskY <= 0) {
//             maskY = 0;
//         } else if (maskY >= maskMax) {
//             maskY = maskMax;
//         }
//         mask.style.left = maskX + 'px';
//         mask.style.top = maskY + 'px';
//         // 3. 大图片的移动距离 = 遮挡层移动距离 * 大图片最大移动距离 / 遮挡层的最大移动距离
//         // 大图
//         var bigIMg = document.querySelector('.bigImg');
//         // 大图片最大移动距离
//         var bigMax = bigIMg.offsetWidth - big.offsetWidth;
//         // 大图片的移动距离 X Y
//         var bigX = maskX * bigMax / maskMax;
//         var bigY = maskY * bigMax / maskMax;
//         bigIMg.style.left = -bigX + 'px';
//         bigIMg.style.top = -bigY + 'px';

//     })

// })
