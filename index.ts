#! /usr/bin/env node
import inquirer from "inquirer" 

       /* TARGETS

1) LET COMPUTER GENERATE A RANDOM NUMBER
2) LET THE USER GIVE INPUT TO GUESS THE NUMBER
3) COMPUTER WILL COMPARE THE USER INPUT WITH ITS OWN RANDOM NUMBER AND GIVE RESULT*/

const randomNumber=Math.floor(Math.random()*6+1);
const answer = await inquirer.prompt([{
    name:"userRandomNumber",
    type:"number",
    message:"Guess A Number Between 1 To 6 : "
}])

if (answer.userRandomNumber===randomNumber){
    console.log("Congratulations! You Guessed The Right Number");
}
else {
    console.log("Sorry You Guessed The Wrong Number, Please Try Again");
    }