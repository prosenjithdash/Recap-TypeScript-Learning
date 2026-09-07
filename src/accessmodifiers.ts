// Access >> Modifiers

class BankAccount{
   public readonly userId: number; // readonly means just read not to can update
   public userName: string; // access for everyone
   protected userBalance: number; // use for access child class work 

    constructor(userId: number, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }

    // update balance method
    addBalance(balance:number) {
        this.userBalance = this.userBalance + balance;
    }
}

class StudentBankAccount extends BankAccount {
    test() {
        this.userBalance = this.userBalance
    }
}





const pappuAccount = new BankAccount(343, 'Pappu', 100)

// pappuAccount.userId = 000; // it's can update but that is wrong course of user id can't change or update. so need to use readonly property.

// pappuAccount.userBalance = 20; // here we can see balance didn't update but it's just last number add like stay 20 but need to update with previous balance. so use here function.

pappuAccount.addBalance(30) // it's properly update with previous balance.
 
console.log(pappuAccount)