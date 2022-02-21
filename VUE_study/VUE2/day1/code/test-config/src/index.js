window.onload=function(){
    var lis = document.getElementsByTagName("li");
    console.log(lis.length);
    for (var i = 0; i < lis.length; i++) {
        if (i % 2 === 0) {
            lis[i].style.backgroundColor = "blue";
        } else {
            lis[i].style.backgroundColor = "pink";
        }
    }
}

