var a,b,c,d,e,i,n,o,r,s,t,aray=[],may=[],ray=[],say=[];
 
var in1=document.getElementById("in1");
var bo1=document.getElementById("bo1");
var bo2=document.getElementById("bo2");
var bo3=document.getElementById("bo3");

in1.addEventListener("input",fun1);
<<<<<<< HEAD
  function fun1() {
    var one=parseFloat(in1.value) || 0;
    var rand=Math.floor(Math.random() * 5);
         bo1.innerHTML=one;
         bo2.innerHTML=rand;
    
         if (one==rand) {
    bo3.innerHTML="YOU ARE RIGHT"; 
        } 
    else {
        bo3.innerHTML="YOU ARE WRONG";
        }
    }
=======
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
>>>>>>> c89cd6b74a1fcb28431690f2b31ee91eaac09b35
