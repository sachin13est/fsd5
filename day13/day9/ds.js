// // // console.log("hello earth")

// // // console.log(a);
// // // a=12;

// // // var a = 40;
// // // if (a>20){
// // //     var a = 90;
// // //     console.log("a inside"+a);
// // // }
// // // else{
// // //     console.log("hiii..inside else")
// // // }
// // // console.log("a is outside"+a);
// // //output is a is outside 90 but don't so 40 . because its not work inside block funtion

// // // let a = 40;
// // // if (a>20){
// // //     let a = 90;
// // //     console.log("a inside"+a);
// // // }
// // // else{
// // //     console.log("hiii..inside else")
// // // }
// // // console.log("a is outside"+a);
// // //output is 90 and 40 both
// // //that's why we use let in the place of var


// // //  function greeting (){
// // //     console.log("hii...welcome");


// // // }
// // // greeting();

// // // function greetings(msg){
// // //     return"hi....welcome"+msg;
// // //     console.log("ended")
// // // }
// // // const data = greetings("sachin");
// // // console.log("data"+data)


// // // const data = function greetings(msg){
// // //     return "hi...hello"+msg;
// // // }
// // // data("vansh");
// // // console.log(msg);

// // // const data = (myname)=>{
// // // return"namste"+myname+"welcome";
// // // }
// // // //arrow funntion
// // // const msg = data("rahul");
// // // console.log(msg);

// // // const data = msg => msg;
// // // console.log(data("hiii...."));
// // // //without body we can alse use the arrow function

// // //IIFE

// // (function(){
// //     console.log("welcome");
// // })();

// // (()=>{
// //     console.log("hiii");
// // })();

// // function greetings(msg="hiii..."){
// //     console.log(msg+"welcome");
// // }
// // greetings();

// function greetings(msg="hiii..."){
//     console.log(msg+"welcome");
// }
// greetings("heyy");
// //default message if user no give it 

// function msg(){
//     console.log("welcome");
// }
//     setTimeout(msg,3000);
//     //it will hold the data for seconds then show the output

// function msg(){
//     console.log("welcome");
// }
//     setTimeout(()=>{
//     console.log("heeyy buddy");
//     },1000);

// function msg(){
// console.log("heyyy");}
// setInterval(MessageChannel,1000);

function selectLanguage (lang){
    let data;
    if(lang=="java"){
        function javacompiler(){
            return"java compiler calling";
        }
        data = javacompiler();
    }
    else if (lang=="c"){
        function ccompiler(){
            return"c compiler calling";
        }
        data = ccompiler();
    }
    else{
        data = "no such compiler be there"
    }
    return data;
}
const result = selectLanguage('c');
console.log(result);
