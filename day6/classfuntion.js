// const student = {
//     name: "sachin",
//     age: 22,
//     branch: "cseds"
// }
// const student2 = {
//     name: "sere",
//     age: 21,
//     branch: "cse"
// }
// console.log("object student1:", student);
// console.log("object student2:", student2);

class Student {
    constructor(name, age, branch) {
        this.name = name;
        this.age = age;
        this.branch = branch;
        this.section = "c";
    }
}
const student3 = new Student("sachin", 22, "cseds");
const student4 = new Student("sere", 21, "cse");
console.log("object student3:", student3);
console.log("object student4:", student4);
console.log(student3.name);
console.log(student4.branch);

