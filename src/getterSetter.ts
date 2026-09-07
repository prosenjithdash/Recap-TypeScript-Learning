// getter
// setter

class BankAccount{
   public readonly userId: number; // readonly means just read not to can update
   public userName: string; // access for everyone
   private userBalance: number; // use for access child class work 

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // update balance method
    // // balance k set kortese // allternative use with setter
    // addBalance(balance:number) {
    //    return this.userBalance = this.userBalance + balance;
    // }

    // setter use
    set addBalance(amount: number) {
        this.userBalance = this.userBalance + amount;
    }


    // //get balance
    // getBalance() {
    //     return this.userBalance;
    // }


    // use getter

    get getBalance() {
       return this.userBalance
    }
}



const pappuAccount = new BankAccount(343, 'Pappu', 100)

// pappuAccount.addBalance(10) // function k call korte hocche

pappuAccount.addBalance = 50; // set er jonno ai vabe use korte hobe



console.log(pappuAccount.getBalance) // same vabe function k call korte hochche