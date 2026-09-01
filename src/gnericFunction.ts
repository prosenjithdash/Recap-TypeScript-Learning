// Generic Function

// Normal function
type Add = (num1: number, num2: number) => number

const add:Add = (num1, num2) => {
   return num1+num2
}

add(68, 98);


// const createArrayWithString = (value: string) => [value];

// const createArrayWithNumber = (value: number) => [value];

// const createArrayWithObj = (value: { id: number; name: string; }) => {
//     return [value]
// };


// const arrString = createArrayWithString('Apple')
// const arrNumber = createArrayWithNumber(99)
// const arrObj = createArrayWithObj({
//     id: 898,
//     name:'Pappu'
// })



// Generic Function
const createArrayWithGeneric = <T> (value:T) => [value]

const arrString = createArrayWithGeneric('Apple')
const arrNumber = createArrayWithGeneric(99)
const arrObj = createArrayWithGeneric({
    id: 898,
    name:'Pappu'
})


// tuple

const createArrayWithTuple = (param1: string, param2: string) => [param1, param2];
 
// Tuple with Generic
const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [param1, param2]

const res1 = createArrayTupleWithGeneric('Pappu', true);
const res2 = createArrayTupleWithGeneric('90', 78)
const res3 = createArrayTupleWithGeneric(
    {
    name: 'Bappu',
    age: 23
    }
    , false)


// admit student one course
const addStudentToCourse = <T>(studentInfo: T) => {
    return {
        course: 'Next Level',
        ...studentInfo
    }
}
    
const student1 = {
    id: 898,
    name: 'Pappu',
    city: 'Dhaka',
    phone:'+8801724154911'
}

const student2 = {
    id: 998,
    name: 'Bappu',
    city: 'Dhaka',
    phone: '+88017909982',
    isMarried: false,
    
}

const result1 = addStudentToCourse(student1)
console.log(result1)
const result2 = addStudentToCourse(student2)
console.log(result2)