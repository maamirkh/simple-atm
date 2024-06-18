#! usr/bin/env node
import inquirer from "inquirer"
let myBalance: number = 25000;
let pinCode: number = 1974
// for enter pin code
let pinAnswer = await inquirer.prompt(
    [
        {
            name: "pin",
            message: "enter your 4 digit pin code",
            type: "number"
        }
    ])
if (pinAnswer.pin === 1974){
    console.log("welcome! You are succesfuly logged in ")
    let options = await inquirer.prompt([
      // for options to perform action
        {
            name: "choices",
            message: "what do you want to do",
            type: "list",
            choices: ["Fast Cash", "Withdraw", "Check Balance"]
    }
    ])
    // for perform fast cash
if (options.choices === "Fast Cash"){
    let fastCash = await inquirer.prompt([
        {
         name: "cash",
         message: "Please select option",
         type: "list",
         choices: [1000, 5000, 10000, 25000]   
        }
    ])
        if (fastCash.cash == 1000 || fastCash.cash == 5000 || fastCash.cash == 10000 || fastCash.cash == 15000 ) {
            myBalance -= fastCash.cash
            console.log(`Your withdrawl Amount is = ${fastCash.cash}`)
            console.log (` Your Remaining Balance is = ${myBalance}`)
        }
    }
        // for perform withdraw
        
        else if (options.choices === "Withdraw") {
            let withDraw = await inquirer.prompt ([
                {
                    name: "cash",
                    message : "Please enter your amount =",
                    type : "number"
                }
            ])
        
            if (withDraw.cash <= myBalance) {
                myBalance -= withDraw.cash
                console.log(`Your Withdrawl Amount is = ${withDraw.cash}`)
                console.log (` Your Remaining Balance is = ${myBalance}`)
            } else {
                console.log ("You Have Insufficient Balance!")
            }
        }
        
        // for perform check balane amount
        
        else if (options.choices === "Check Balance") {
            console.log (`Your Current Balance is = ${myBalance}`)
        }} 
        else {
            console.log ("You Entered Incorrect Pin!")
        }
