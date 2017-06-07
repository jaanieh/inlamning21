 /*
   sätta in pengar
   ta ut pengar
   för över pengar
    */

let initialState = {
    accountNr: 1001,
    accountBalance: null,
    destinationAccount: null
    
};

//action constants
const DEPOSIT = "DEPOSIT",
      WITHDRAW = "WITHDRAW",
      TRANSFERFUNDS = "TRANSFERFUNDS";


function actionDeposit(amount){
    return {
        type: DEPOSIT, 
        amount
    }
}


function actionWithdraw(amount){
    return {
        type: WITHDRAW,
        amount
    }
}

function actionTransferFunds(amount, destinationAccount){
    return {
        type: TRANSFERFUNDS,
        amount,
        destinationAccount
    }
}