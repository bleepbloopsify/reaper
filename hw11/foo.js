var base = "this is in f1 in global namespace";
var x = "x in the global namespace";
var f2 = function(){
  console.log('f2');
};

var f1 = {
  x: "something in the f1 namespace",
  showx:function(){
    console.log(this.x);
  },
  f2:f2,
  f : function(){
    console.log('this is f in f1 namespace');
    this.f2();
    this.showx();
  }
};

f1.showx();
f1.f2();
f1.f();
// console.log(f1.f2);

var makeIncrementer = function(n){
  var incrementer = {
    curr:0,
    inc:n || 1,
    show:function(){
      incrementer.curr += incrementer.inc;
      return incrementer.curr;
    }
  };
  return incrementer.show;
};
