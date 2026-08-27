// Function
// arrow function, normal function

// normal function
function addFun(a: number, b: number): number
{
    let re = a + b;
    return re
}
addFun(10, 20)



// arrow function
const add = (a: number, b: number):number => a + b 
add(89,85)


// object => function => method
const bikers = {
    ownerName: 'Pappu',
    bikeName: 'Honda NX200',
    helmet: 'Mt stinger 2',
    gloves: 'ones again',
    fuel: 12,
    balance: 0,

    // method
    addBalance(value: number): number {
        const totalBalance = this.balance + value
        return totalBalance;
    }

};

bikers.addBalance(500)

// call back function
const arr: number[] = [1, 3, 5];
const sqrAraay = arr.map((elm: number) : number => elm * elm);