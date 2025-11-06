var a ;
a = 34 ; 
console.log(a);
function fun(){
    console.log(a);
    var a = 67;
    console.log(a);

}
fun();
console.log(a);