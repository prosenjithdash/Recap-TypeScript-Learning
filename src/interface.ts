// Interface

// type declare
type User = {
    name: string,
    age: number
}

// Interface declare : object type: array, object, function
interface IUser{
    name: string,
    age: number
}

// union
type Role = {
    role: 'admin' | 'user'
}

// Intersection with type alias
// use for some property
type UserWithRole = User & Role;

const user1: UserWithRole = {
    name: 'pappu',
    age: 24,
    role: 'admin'
}

// extends with interface
// use for more property like object type

interface IUserWithRole extends User {
    role: 'admin' | 'user'
}

const user01: IUserWithRole = {
    name: 'pappu',
    age: 24,
    role: 'admin'
}

const user2: User = {
    name: 'Bappu',
    age: 21
}

const user3: IUser = {
    name: 'Labib',
    age: 23
}


// what's the deference of Type Alias and Interface?

// primitive data type here possible to declare type alias but not possibole declare to interface.
type IsAdmin = boolean
const isAdmin: IsAdmin = true

// interface use to primitive , See it's not possible, But Possible to use object type like array , function and object

// interface IsUser {
//     IsUser = boolean
// }



// Interface use with fuction

// with type
type Add = (num1: number, num2: number)=> number
const add:Add = (num1, num2) =>{
    return num1 + num2;
}
add(48, 53);

// fuction with interface
interface Imul{
    (num1:number, num2:number):number
}
const mul:Imul = (num1, num2) =>{
    return num1 + num2;
}
mul(48, 53);


// array with type
type Friend = string[]

const friends: Friend = ['A', 'B', 'C']

// array with Interface
interface IFriend{
    [index:number]: string
}

const friendsI: IFriend = ['A', 'B', 'C']


// WHEN USE TYPE ALIAS AND INTERFACE THE BEST?
// Type alias use  Array and fuction
// Interface use Object