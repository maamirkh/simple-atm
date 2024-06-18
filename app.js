#! usr/bin/env node
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var inquirer_1 = require("inquirer");
var myBalance = 25000;
var pinCode = 1974;
// for enter pin code
var pinAnswer = await inquirer_1.default.prompt([
    {
        name: "pin",
        message: "enter your 4 digit pin code",
        type: "number"
    }
]);
if (pinAnswer.pin === 1974) {
    console.log("welcome! You are succesfuly logged in ");
    var options = await inquirer_1.default.prompt([
        // for options to perform action
        {
            name: "choices",
            message: "what do you want to do",
            type: "list",
            choices: ["Fast Cash", "Withdraw", "Check Balance"]
        }
    ]);
    // for perform fast cash
    if (options.choices === "Fast Cash") {
        var fastCash = await inquirer_1.default.prompt([
            {
                name: "cash",
                message: "Please select option",
                type: "list",
                choices: [1000, 5000, 10000, 25000]
            }
        ]);
        if (fastCash.cash == 1000 || fastCash.cash == 5000 || fastCash.cash == 10000 || fastCash.cash == 15000) {
            myBalance -= fastCash.cash;
            console.log("Your withdrawl Amount is = ".concat(fastCash.cash));
            console.log(" Your Remaining Balance is = ".concat(myBalance));
        }
    }
    // for perform withdraw
    else if (options.choices === "Withdraw") {
        var withDraw = await inquirer_1.default.prompt([
            {
                name: "cash",
                message: "Please enter your amount =",
                type: "number"
            }
        ]);
        if (withDraw.cash <= myBalance) {
            myBalance -= withDraw.cash;
            console.log("Your Withdrawl Amount is = ".concat(withDraw.cash));
            console.log(" Your Remaining Balance is = ".concat(myBalance));
        }
        else {
            console.log("You Have Insufficient Balance!");
        }
    }
    // for perform check balane amount
    else if (options.choices === "Check Balance") {
        console.log("Your Current Balance is = ".concat(myBalance));
    }
}
else {
    console.log("You Entered Incorrect Pin!");
}
