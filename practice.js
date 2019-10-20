var a;var b;var c;var d;var i;var r;var t;var rr;var may=[0];arry=[0];ray=[0];

a=0;
function funk() {
  c=0;
  for (i=0;i<10;i++) { 
    var rand=Math.floor(Math.random()*100);
    may[i]=rand;
    if (rand%2==1) {
      rr=rand;may[i]=rr;
      console.log(rr + (" this a odd number"));
    }
    else {
    console.log(may[i] + (" this is an even number"));
    }
  }
}
function fun1 () {
  console.log("\n",may[9]); 
 
}