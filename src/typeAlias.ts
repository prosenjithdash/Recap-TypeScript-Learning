// Type Alias
// Reusing type
type User = {
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: 'male' | 'female',
    contactNo: number,
    address: {
        division: string,
        city: string
    }
}

const user1: {

    // type define
    id: number,
    name: {
        firstName: string,
        lastName: string
    },
    gender: 'male' | 'female',
    contactNo: number,
    address: {
        division: string,
        city: string
    }


} =
{
    id: 123,
    name: {
        firstName: 'Papppu',
        lastName: 'Dash'
    },
    gender: 'male',
    contactNo: +8801724154911,
    address: {
        division: 'Dhaka',
        city: 'Dhaka'
    }

}



// USER 02
const user2: User =
// I'm using here type alias .
{
    id: 123,
    name: {
        firstName: 'Bapppu',
        lastName: 'Dash'
    },
    gender: 'male',
    contactNo: +880168578382,
    address: {
        division: 'Sylhet',
        city: 'Sreemangal'
    }

}


// Function => use type alias

// normal function type define
const add = (num1:number, num2:number):number => {
    return num1 + num2
}
add(40, 50);


// function type define with type alias
type MulFunc = (num1: number, num2:number) => number

const mul:MulFunc = (num1, num2) => {
    return num1 * num2
}
mul(40, 50);