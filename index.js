
var x=document.getElementById("quantity");
function fun1(){
        x.innerHTML= parseInt(x.innerHTML)+1;
    }
function fun2(){
    if(parseInt(x.innerHTML)>0){ x.innerHTML=parseInt(x.innerHTML)-1;}
    else {
        x.innerHTML = parseInt(x.innerHTML)+0;
    }
}