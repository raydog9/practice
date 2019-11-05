var a,b,c,d,e,i,n,o,r,s,t,aray=[],may=[],ray=[],say=[];
 
var in1=document.getElementById("in1");
var bo1=document.getElementById("bo1");
var bo2=document.getElementById("bo2");
var bo3=document.getElementById("bo3");

in1.addEventListener("input",fun1);
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
