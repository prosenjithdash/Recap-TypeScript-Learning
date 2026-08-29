// Type Assertion
//=> You tell TypeScript, “I know the type of this value better than you do.”
// => When we are sure about the exact type, then use type assertion.


let anything: any;
anything = 890;

(anything as number);

const kgToGMConvertor = (input: string | number):string | Number | undefined => {
    if (typeof input === 'number') {
        return input *1000
    } else if (typeof input === 'string') {
        const[value] = input.split(' ')
        return `Converted output is : ${Number(input) *1000}`
    }
}

const result1 = kgToGMConvertor(90) as number
console.log('Result1:', result1)
const result2 = kgToGMConvertor('100') as string
console.log('Result2:', result2)
