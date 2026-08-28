// ? : ternary operator : decision making
// ?? : nullish coaLessing operator : null / undefined
// ?. : optional chaining
// code run type on terminal=> npx tsx ./src/questionMark.ts


// ? : ternary operator : decision making
// using if , else
const MerageEligible = (age : number) => {
    if (age >= 21) {
        console.log('You are eligible for Merage.');
    }
    else{
        console.log('You are not eligible for Merage.')
    }
}
MerageEligible(21);

// using ternary operator (? :)
const JobEligible = (interviewPoint: number) => {
    
    const result = interviewPoint >= 80 ? 'You are eligible for this job.' : 'You are not eligible for this job.'
    console.log(result)
    
}

JobEligible(75);


// ?? : nullish coaLessing operator : null / undefined
// => for null or undefined value result is default value
//=> without null , undefined  or blank value then result is emty.
//=> if have to any value then showing that like -> const userTheme =  'Green Theme'

// for undefined
const userTheme = undefined;
const selectedTheme = userTheme ?? 'Light Theme.'
console.log(selectedTheme)

// for null
const guestTheme = null;
const setTheme = guestTheme ?? 'Dark Theme.'
console.log(setTheme)


// for blank value without null , undefined , value
const employeeTheme = '';
const employeeSetTheme = employeeTheme ?? 'Dark Theme.'
console.log(employeeSetTheme)

// for value without null or undefined
const adminTheme = 'Green Theme';
const adminSetTheme = adminTheme ?? 'Dark Theme.'
console.log(adminSetTheme)


//Optional Chaining ?
const Employee: {
    id: number,
    name: string,
    address: {
        city: string,
        division: string,
        area: string
    }
} = {
    id: 898,
    name: 'Ashuk Dash',
    address: {
        city: 'Dhaka',
        division: 'Dhaka'
    }
}
const area = Employee?.address?.area
console.log(area);



