// JSON
// JavaScript Object Notation

const student = {
    rollNo: 123,
    name: "xyz"
};

// Convert object to JSON string
const jsonObj = JSON.stringify(student);
console.log(jsonObj);
console.log("type of jsonObj:", typeof jsonObj);

// Convert JSON string back to object
const jsonToObj = JSON.parse(jsonObj);
console.log(jsonToObj);
console.log("type of jsonToObj:", typeof jsonToObj);

// Example JSON array
const jsonData = [
    { "rollNo": 2, "name": "b" },
    { "rollNo": 1, "name": "a" },
    { "rollNo": 3, "name": "c" }
];

// Loop through array
jsonData.forEach((data) => {
    console.log("Roll No:", data.rollNo);
    console.log("Name:", data.name);
});
