#!usr/bin/env node

import inquirer from "inquirer";

let todos: string[] = []
let loop = true;

while(loop){
    const answers = await inquirer.prompt([
        {
            type: "input",
            name: "TODO",
            message: "What do you want to add in your todo list? ",
        },
        {
            type: "confirm",
            name: "addmore",
            message: "Do you want to add more todos in your todo list? ",
            default: false 
        }
    ]);

    const {TODO, addmore} = answers;
    console.log(answers)
    loop = addmore
    if(TODO) {
        todos.push(TODO)
    } else {
        console.log("Kindly add valid input")
    }

};
    if(todos.length > 0) {
        console.log("Your TOdo List: ")
            console.log(todos)
        } else {
        console.log("No todos found")
    }
    

