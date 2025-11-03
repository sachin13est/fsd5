const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const output = document.getElementById("output");
let result = 0;

const add = () => {
    if (num1.value === "" || num2.value === "") {
        output.value = "Please enter both numbers";
    } else {
        result = parseFloat(num1.value) + parseFloat(num2.value);
        output.value = result;
        output.style.color = "red";
    }
};

const subtract = () => {
    if (num1.value === "" || num2.value === "") {
        output.value = "Please enter both numbers";
    } else {
        result = parseFloat(num1.value) - parseFloat(num2.value);
        output.value = result;
        output.style.color = "red";
    }
};

const multiply = () => {
    if (num1.value === "" || num2.value === "") {
        output.value = "Please enter both numbers";
    } else {
        result = parseFloat(num1.value) * parseFloat(num2.value);
        output.value = result;
        output.style.color = "red";
    }
};

const divide = () => {
    if (num1.value === "" || num2.value === "") {
        output.value = "Please enter both numbers";
    } else if (parseFloat(num2.value) === 0) {
        output.value = "Cannot divide by zero";
    } else {
        result = parseFloat(num1.value) / parseFloat(num2.value);
        output.value = result;
        output.style.color = "red";
    }
};
