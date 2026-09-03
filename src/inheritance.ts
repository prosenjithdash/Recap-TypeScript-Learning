// inheritance 

class Parent{

     // parameter define
    name: string;
    age: number;
    address: string;

    // parameter iniselize
    constructor(name: string, age: number, address: string) {
        this.name = name;
        this.age = age;
        this.address = address;
    }

    // common method
    getSleep(numberOfHours:number) {
        console.log(`${this.name} Sleep hour is too much like ${numberOfHours}`)
    }
}


class Student extends Parent{
    // // parameter define
    // name: string;
    // age: number;
    // address: string;

    // // parameter iniselize
    // constructor(name: string, age: number, address: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    // }

    // // common method
    // getSleep(numberOfHours:number) {
    //     console.log(`${this.name} Sleep hour is too much like ${numberOfHours}`)
    // }
}

const student1 = new Student('Pappu', 24, 'Dhaka')
console.log(student1)
student1.getSleep(9);



// 2nd class

class Teacher extends Parent{
    // parameter define
    // name: string;
    // age: number;
    // address: string;
    designation: string; // own property

    // // parameter iniselize
    // constructor(name: string, age: number, address: string, designation: string) {
    //     this.name = name;
    //     this.age = age;
    //     this.address = address;
    //     this.designation = designation;
    // }

    // parameter iniselize
    constructor(name: string, age: number, address: string, designation: string) {
        
        super(name,age,address)
        this.designation = designation;
    }

    // // common method
    // getSleep(numberOfHours:number) {
    //     console.log(`${this.name} Sleep hour is too much like ${numberOfHours} hours`)
    // }

    // own method
    takeClass(numberOfHour:number) {
        console.log(`${this.name} sir take ${numberOfHour} hours class.`)
    }
}

const teacher1 = new Teacher('Asif', 34, 'Dhaka', 'ASS Teacher');
teacher1.takeClass(4);