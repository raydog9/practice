var a="",b,c,d,e,i,n,o,r,s,t,aray=[],may=[],ray=[],say=[];
 
var in1=document.getElementById("in1");
var bo1=document.getElementById("bo1");
var bo2=document.getElementById("bo2");
var bo3=document.getElementById("bo3");
var po1=document.getElementById("po1");
var he1=document.getElementById("he1");


in1.addEventListener("input",fun1);
 
function fun1() {
    a++;
    var one=parseFloat(in1.value) || 0;
    var rand=Math.floor(Math.random() * 5 +1);
      aray[a]=rand;
      may[a]=one;
        bo1.innerHTML=one;
        bo2.innerHTML=rand;

    
         if (one==rand) {
    bo3.innerHTML="YOU ARE RIGHT"; 
 
        } 
    else {
        bo3.innerHTML="YOU ARE WRONG";
        }
         po1.innerHTML=may + " this is your guess";
        he1.innerHTML=aray + " this is the computers guess"
    console.log(aray  );
    console.log(may );

    }
    