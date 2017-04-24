var a = {};

for( var i = 0; i < 3; i++ ){
  (function (j){
    a[j] = function(){
    console.log(j);
    };
  })(i);
}
a[0]();
a[1]();
a[2]();
