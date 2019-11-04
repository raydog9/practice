var a,b,c,d,e,i,n,o,r,s,t,aray=[],may=[],ray=[],say=[];
 
var in1=document.getElementById("in1");
var in2=document.getElementById("in2");
var he1=document.getElementById("he1");
var bo1=document.getElementById("bo1");
var bo2=document.getElementById("bo2");


in1.addEventListener("input",fun1);
in2.addEventListener("input",fun1);
function fun1() {
    var one=parseFloat(in1.value) || 0;
    var two=parseFloat(in2.value) || 0;
     he1.innerHTML = one + two;
     bo1.innerHTML=one;
     bo2.innerHTML=two;
} 