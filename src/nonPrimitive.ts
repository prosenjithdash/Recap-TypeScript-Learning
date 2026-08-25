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

