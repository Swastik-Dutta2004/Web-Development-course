// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// Object.setPrototypeOf(rabbit, animal);

class animal {
    constructor(name,place) {
        this.name = name
        this.place =  place
    }

    eat(){
        console.log("I am eating");
    }

    going(){
        console.log("I am going");
        
    }
}

let a = new animal("SWasTiK","kirnahar")


class lion extends animal{
    constructor(name){
        super(name)
    }
}

let l = new lion("Shera")