var a,b,c,d,e,i,n,o,r,s,t,aray=[],may=[],ray=[],say=[];
 
var in1=document.getElementById("in1");
var in2=document.getElementById("in2");
var he1=document.getElementById("he1");
var bo1=document.getElementById("bo1");
var bo2=document.getElementById("bo2");
var bo3=document.getElementById("bo3");

in1.addEventListener("input",fun1);
in2.addEventListener("input",fun1);
bu1.addEventListener("click",fun2);

function fun1() {
    var ione=parseFloat(in1.value) || 0;
    var itwo=parseFloat(in2.value) || 0;
     he1.innerHTML = ione + itwo;
     bo1.innerHTML=ione;
     bo2.innerHTML=itwo;
} 

function fun2() {
    var rand=Math.floor(Math.random()*10);
    bo3.innerHTML=rand;
}