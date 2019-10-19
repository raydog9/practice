var a;var b;var c;var d;var i;var r;var t;var rr;var may=[0];arry=[0];

a=0;
function funk() {
  c=0;
  for (i=0;i<10;i++) {
 var rand=Math.floor(Math.random()*100);
 may[i]=rand
if (rand%2==1) {
    a=rand;arry[i]=a;
 document.getElementById("bo1").innerHTML=a;
 document.getElementById("bo2").innerHTML=("THIS IS AN ODD NUMBER");
console.log(arry[i]+"\n");
c++;
console.log(c);
}
else {
document.getElementById("bo1").innerHTML=rand;
document.getElementById("bo2").innerHTML=("this is an even number")
d="";
d++;
document.getElementById("bo3").innerHTML=d;

}

}
}
