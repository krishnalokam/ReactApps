const numbers1 = [1,2,3];
const numbers2 = [4,5,6];

//combining two arrays using spread
const numbers = [...numbers1, ...numbers2];
console.log(numbers);

const values = [1,2,3,4,5,6,7,8,9,10,11]
const [one, two, ...rest] = values;

console.log("one "+one)
console.log("two "+two);
console.log("rest "+rest)

//combining two objects

const myVehicle = {
    brand:'Ford',
    model:'Mustang',
    color:'red'
}

const updateMyVehicle = {
    type:'car',
    year:2021,
    color:'yellow'
}

const myUpdatedVehicle = {...myVehicle, ...updateMyVehicle}
console.log(myUpdatedVehicle);