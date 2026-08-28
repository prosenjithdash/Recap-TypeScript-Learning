// ? : ternary operator : decision making
// ?? : nullish coaLessing operator
// ?. : optional chaining
// code run type on terminal=> npx tsx ./src/questionMark.ts

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
const JobEligible = (interviewPoint:number) => {
    const result = interviewPoint >= 80 ? 'You are eligible for this job.' : 'You are not eligible for this job.'
    console.log(result)
    
}

JobEligible(75);