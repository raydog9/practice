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
      console.log(rr + (" this is a odd number   " + ("\t") + (i)));
      }
      else {
      c=rand;ray[i]=c;
      console.log(c + (" this is an even number" + ("\t") + (i)));
    }
       
     
      }
      console.log("\n");
    } 
function fun1() {
  var b=0;;
  for (b=0;b<10;b++) {
    console.log(ray[b]);
}
}
 