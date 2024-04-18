var a , b , c ;
var d=1;
var range=3;
document.querySelector("#bt1").onclick=function() {
    var a=parseInt(Math.random()*range +1);
    document.querySelector("#first").textContent=a;
    const b1=document.querySelector("#bt1");
    b1.disabled=true;
    const b3=document.querySelector("#bt2");
    b3.disabled=false;

};

document.querySelector("#bt2").onclick=function() {
    var b=parseInt(Math.random()*range +1);
    document.querySelector(".two").textContent=b;


    c=document.querySelector("#first").textContent;
    
    if(c==b){
        const b2=document.querySelector("#bt2");
        b2.disabled=true;
        const b4=document.querySelector("#bt3");
        b4.disabled=false;
    }
    document.querySelector(".count").textContent=d;
    d++;  
};
