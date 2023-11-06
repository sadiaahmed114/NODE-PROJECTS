#!/usr/bin/env node 

import inquirer from "inquirer";

type userType = {
    name: string;
    pin: number;
    balance: number;
}

let user: userType = {
    name: "Ayan",
    pin: 1401,
    balance:200000,
}
console.log("Welcome to ATM");

const resp = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Please enter pin",
    },
]);
let continueTransaction: boolean = true

console.log("resp: ",resp);

if ((resp.pin) != user.pin){
    console.log("You have entered an incorrect pin");
} else {

    while(continueTransaction == true){

    const resp = await inquirer.prompt([
        {
            name: "selectedType",
            type:"list",
            message: "Please select an option",
            choices: ["Withdrawl", "Fast Cash","Balance Inquiry"],
        },

        {
            name: "amount",
            type:"list",
            message: "Please select an Amount",
            choices: ["500", "1000", "2000", "3000", "5000", "10000"],
            when(resp) {
                return resp.selectedType == "Fast Cash";
            },

        },

        {
            name: "amount",
            message: "Please select an Amount",
            when(resp) {
                return resp.selectedType == "Withdrawl";

            },
        },

    ]);
    console.log('selectedType:',resp );

    if (resp.selectedType == "Balance Inquiry") {
        console.log(`Your balance is ${user.balance}`)
        const toRepeat = await inquirer.prompt([
            {
                name: "repeat",
                type: "confirm",
                message: "Do you want to try another transaction",
            },
        ]);

        if(toRepeat.repeat == true ) continueTransaction = true;
        else {
            continueTransaction = false;
                }
    } else {
        
        user.balance = user.balance - resp.amount;
        console.log(`Your new balance is ${user.balance}`)
        continueTransaction = false;
    }
  
   }
}
