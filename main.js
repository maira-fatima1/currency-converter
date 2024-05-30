#! /usr/bin/env node 
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.blue.bold("\n\t Welcome to Currency_Converter\n"));
//Define the list of currencies and their exchange rates
let exchange_rate = {
    USD: 1, // Base Currency
    EUR: 0.9, // European Currency(Euro)
    GBP: 0.76, // UK Currency 
    INR: 74.57, // Indian Rupees
    JYP: 113, // Japenese Currency(Yen)
    CAD: 1.3, // Canadian Dollar 
    AUD: 1.65, // Australian Dollar
    PKR: 280 // Pakistani Rupees
    // Add more currencies and their exchange rates here
};
//prompt the user to select  currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        message: "Enter to Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "input"
    }
]);
//Perform currency conversion by using Formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = [user_answer.amount];
//Formula of conversion
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(`Coverted Amount= ${converted_amount}`);
