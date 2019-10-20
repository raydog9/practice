var a;var b;var c;var d;var i;var r;var t;var rr;var may=[0];arry=[0];ray=[0];

a=0;
function funk() {
  c=0;
  for (i=0;i<10;i++) { 
    var rand=Math.floor(Math.random()*100);
    may[i]=rand;
    ray[i]=rand;
    if (rand%2==1) {
      rr=rand;may[i]=rr;
      console.log(rr + (" this a odd number" + (i)))  ;
    }
    
   }
  console.log("\n");
}
function fun1 () {
  for (d=0;d<10;d++) {
     console.log(ray[d]); 
  }
  console.log("\n");
}
function fun2 () {
  for (c=0;c<10;c++) {
    if (ray[c]%2==0) {
      console.log(ray[c] + ("this is an even number"));
    }
  }
}