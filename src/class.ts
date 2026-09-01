// oop - class ->>> object

// Animal Class
// class Animal{
//     name: string;
//     species: string;
//     sound: string;

//     constructor(name: string, species: string, sound: string) {
 //        inasialize

//         this.name = name
//         this.species = species
//         this.sound = sound
            
//     }

//     // how to define method ?
//     //=> method is apply function on any class object
//     makeSound() {
//         console.log(`${this.name} is making sound : ${this.sound} `)
//     }
// }


// using here parameter properties
// Animal Class
class Animal{
    // property define

    // public name: string;
    // public species: string;
    // public sound: string;

    constructor(
       public name: string,
       public species: string,
       public sound: string
    ) {
        // inasialize

        // this.name = name
        // this.species = species
        // this.sound = sound
            
    }

    // how to define method ?
    //=> method is apply function on any class object
    makeSound() {
        console.log(`${this.name} is making sound : ${this.sound} `)
    }
}

// object with Animal Class
const dog = new Animal('Tom', 'dog', 'ghew ghew');
const cat = new Animal('Tomi', 'cat', 'mew mew')

console.log(dog.name);
console.log(cat.sound);

// call method
dog.makeSound()




