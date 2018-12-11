var sun = document.getElementById("sun");
sun.innerHTML="<img src='./image/taiyang.png'>"

var b=function () {
    var sun = document.getElementById("sun");
    if(sun.innerHTML=='<img src="./image/taiyang.png">'){
        sun.innerHTML="<img src='./image/moon.png'>"
    }else{
        sun.innerHTML="<img src='./image/taiyang.png'>"
    }
    console.log(sun.innerHTML)
  
}
setInterval(b,30000)

var objTop = document.getElementById("area");
var n=0;
function clickHandler() {
    n++
    var mouseX = event.clientX+document.body.scrollLeft;
    var mouseY = event.clientY+document.body.scrollTop;

    var p = document.createElement("p");

    p.style.left=mouseX+0+'px'
    p.style.top=mouseY+35+'px'
   
    var shu = document.getElementById("shu");
    if(n>300){
        shu.innerHTML="<img src='./image/Infinity.png'>"
        var fontzi = document.getElementById("fontzi");
        fontzi.style.height=10+'px';
        fontzi.innerHTML='Will you continue?'
    }else{
        objTop.appendChild(p);
        shu.innerHTML=`${n+'/'+'300'}`
    }

}