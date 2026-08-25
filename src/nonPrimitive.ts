//non primitive datatype

// JS -> Array, Object
// TS -> tuple

// Array
let shoppingList:string[] = ['shirt', 'pant', 'sneakers']

shoppingList.push('t-shirt') // just allow sting
shoppingList.push(90)


// Array MixedElements
let mixedElements:(string | number)[] = [90, 'pappu', 89, 'bappu']

mixedElements.push(100) // arrow just string and number
mixedElements.push(true)

// tuple
let coordinates:[number,number] = [60, 70]

let coordinatesE: [number, number] = [60, 70, 80] // not allow need just 2 num
 
let bud: [number, string, number] = [90, 'bud', 100]
let Dog:[number,string,number] = [90,100,'dog'] // must maintain serial


// reference type : object

const user: {
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
} = {
    firstName: 'Prosenjith',
    middleName: 'Dash',
    lastName: 'Pappu'
    
}

// Value => type

const info: {
// TYPE DEFINE
    company: 'PDP Ltd', //value => type : Literal types
    city: string,
    division: string
} = {
    company: 'PDP Ltd',
    city: 'Dhanmondi',
    division : 'Dhaka'
}

info.company = 'PDB Ltd' // don't change this value course of value is define as a type

//Another option is readonly. When you will use readonly then you can not change any value.
//like that

  // readonly company: string,
