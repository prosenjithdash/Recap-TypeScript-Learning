// generics
// dynamically generalize: Generic


type GenericArray<T> = Array<T>

// const friends: string[] = ['x', 'y', 'z'];
// const friends: Array<string> = ['x', 'y', 'z'];
const friends: GenericArray<string> = ['x', 'y', 'z'];


// const rollNumber: number[] = [44, 64, 22];
// const rollNumber: Array<number> = [44, 64, 22];
const rollNumber: GenericArray<number> = [44, 64, 22];


// const isEligibleList: boolean[] = [true, false, true];
// const isEligibleList: Array<boolean> = [true, false, true];
const isEligibleList: GenericArray<boolean> = [true, false, true];



// Generics Use for Array of object
const userList:GenericArray<{name:string,age:number}> = [
    {
        name: 'x',
        age: 23
    },
    {
        name: 'y',
        age: 25
    }
]












type Coordinates<X,Y> = [X,Y];
// type Coordinates = [number, number];
const Coordinates1: Coordinates<number, number> = [20, 48];
// const Coordinates1: Coordinates = [20, 48];

const Coordinates2: Coordinates<string,string> = ['20', '48'];

