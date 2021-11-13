class Car {
    constructor(name){
        this.brand = name;
    }

    present() {
        return 'I have '+this.brand;
    }
}

class Model extends Car {

    constructor(name,mod) {
        super(name);
        this.mod = mod;
    }

    show() {
        return this.present() + ',it is a '+ this.mod;
    }
}
const myCar = new Model('Ford','Mustang');
console.log(myCar.show());

