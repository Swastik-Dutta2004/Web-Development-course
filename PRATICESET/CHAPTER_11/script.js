// Q1,2
// class complexNumber {
//     constructor(real,complex){
//         this.real = real
//         this.complex = complex
//     }

//     display(){
//         console.log(`${this.real} + ${this.complex}`);
        
//     }
//     add(other){
//         let newReal = this.real + other.real
//         let newComplex = this.complex + other.complex
//         return new complexNumber(newReal,newComplex)
//     }
// }

// let a = new complexNumber(5,8)
// let b = new complexNumber(2,7)

// let result = a.add(b)
// result.display()

//Q3

class human {
    eat(){
        console.log("Human love to eat");    
    }
    peace(){
        console.log("peace is most important thing in human life");
    }
}

class student extends human{
    peace(){
        console.log("There are some of the student who are traumatized for the pressure in their study life");
        
    }
}
let s = new student()
s.eat()
s.peace()