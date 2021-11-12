const vehicles = ['mustang','f-150','expedition'];

//old way
const car = vehicles[0];
const truck = vehicles[1];
const suv = vehicles[2];

//with destructurting

const [car, truck, suv] = vehicles;

function calculate(a,b) {
    const add = a+b;
    const subtract = a-b;
    const multiply = a*b;
    const divide = a/b;    

    return [add, subtract,multiply, divide];
}

const [add, subtract, multiply, divide ] = calculate(4,7);

document.write("<p>Sum "+add+"</p>");
document.write("<p>Subtraction "+subtract+"</p>");
document.write("<p>Multiplication "+multiply+"</p>");
document.write("<p>Divide "+divide+"</p>");

/* Destructuring Object */

const vehicleOne = {
    brand: 'Ford',
    model: 'mustang',
    type: 'car',
    year: 2021,
    color: 'red'
}

myVehicle(vehicleOne);

function myVehicle(vehicle) {
    const message = "My "+vehicle.type + "is a "+ vehicle.color + ' ' + vehicle.brand + ' ' + vehicle.model +'.';
}

function myVehicle({type, color, brand, model}) {
    const message = "My "+type+ "is a "+ color + ' ' + brand + ' '+ model + '.';
}

const vehicleOne = {
    brand:'Ford',
    model: 'Mustang',
    type: 'Car',
    year: 2021 ,
    color: 'red',
    registration: {       
        city:'Houston', 
        state: 'Texas', 
        country: 'USA'
    }
}

myVehicle(vehicleOne);

function myVehicle({type, model,registration:{state}}) {
    const message = "My "+model + "is    registered in "+state ;
}