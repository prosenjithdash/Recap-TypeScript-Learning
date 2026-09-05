// oop : instance of type guard/ type narrowing
// instance means normal object

// parent class
class Person {
    name: string

    constructor(name: string,) {
        this.name = name
    }

     getSleep(numberOfHours: number) {
        console.log(`${this.name} everyday doing sleep ${numberOfHours}`)
    }
}

// child class 01
class Student extends Person{
    constructor(name: string) {
        super(name)
    }

    doStudy(numberOfHours: number) {
        console.log(`${this.name} everyday doing study ${numberOfHours}`)
    }
}

// child class 02

class Teacher extends Person {
    // optional
    constructor(name: string) {
         super(name)
    }

    takeClass(numberOfHours: number) {
        console.log(`${this.name} everyday take class ${numberOfHours}`)
    }
   
}

const getUserInfo = (user: Person) => {

    // using instance of type guard
    if (user instanceof Student) {
        user.doStudy(6);
    }
    else if (user instanceof Teacher) {
        user.takeClass(2);
    }
    else {
        user.getSleep(7);
    }
    

}

// now create object from class
const student1 = new Student('Pappu Student')
const teacher1 = new Teacher('Ali Teacher')
const person1 = new Person('Pusphiya Person')

getUserInfo(student1)
getUserInfo(teacher1)
getUserInfo(person1)