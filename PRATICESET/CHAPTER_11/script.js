class complexNumber {
    constructor(real,complex){
        this.real = real
        this.complex = complex
    }

    display(){
        console.log(`${this.real} + ${this.complex}`);
        
    }
}

let a = new complexNumber(5,8)
a.display()