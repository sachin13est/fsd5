const car = {
    brand : "Toyota",
    model : "fortuner",
    year : 2025,
    color : "black"
}
console.log(car.brand);
console.log(car.model);
function changeModel(obj){
    obj.model = "camry";
}
changeModel(car);
console.log(car.brand);
console.log(car.model);

const myCar = Object.assign({},car);
console.log(myCar);
myCar.model = "supra";
console.log(myCar.model);
console.log(car.model);
