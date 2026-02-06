const fs=require('fs');
// // sync(synchronous) and async(asynchronous
// //sync execute all tesks one by one either it's take more time
// call stack is used to execute all tasks in sync manner
// for output write node index.js in terminal
// //async execute all tasks parallelly it will take less time
// //in async we use callback funtion to handle results
// // fs.writeFileSync("./ds-b.txt","hello abes student");
// // fs.writeFileSync("./abes.txt","hi abes college student");

// // const result = fs.readFileSync("./abes.txt","utf-8");
// // console.log(result);
// // const result1 = fs.readFileSync("./ds-b.txt","utf-8");
// // console.log(result1);

// // fs.writeFile("./abes.txt","we have a code", () => { });   //() =>{ } is callback funtion
// // fs.writeFile("./ds-b.txt","we are abes student", () => { });

// fs.readFile("./abes.txt","utf-8", (err,result)=> {  
// if(err)
// {
//     console.log("error",err);
// }
// else{
//     console.log(result);
// }
// });

//  fs.writeFileSync("./a1.txt","hello abes student");
//  fs.writeFileSync("./a2.txt","hi abes college student");
//   const result = fs.readFileSync("./a1.txt","utf-8");
// console.log(result);
// const result1 = fs.readFileSync("./a2.txt","utf-8");
// console.log(result1);


 
//  fs.writeFile("./b1.txt","we have a code", () => { });   //() =>{ } is callback funtion
//  fs.writeFile("./b2.txt","we are abes student", () => { });

//  fs.readFile("./b1.txt","utf-8", (err,result)=> {  
// if(err)
// {
//     console.log("error",err);
// }
// else{
//     console.log(result);
// }
// });

// fs.readFile("./b2.txt","utf-8", (err,result)=> {  
// if(err)
// {
//     console.log("error",err);
// }
// else{
//     console.log(result);
// }
// });
 
//"./" -> current directory

// fs.appendFileSync("./abes.txt", `phd`);

// fs.appendFile("./abes.txt",`phd`, () => { });   //async

fs.cpSync("./abes.txt","./c1.txt");

fs.cp("./abes.txt","./c2.txt", () => { });    //async
