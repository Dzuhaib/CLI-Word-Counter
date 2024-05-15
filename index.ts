

import inquirer from "inquirer"

const answer = await inquirer.prompt ([
    {
        name: "Sentence",
        type: "input",
        message: "Please enter the paragraph to count the words"
    }
])
const words = answer.Sentence.trim().split(" ")
console.log(words.join(' '));

console.log(`The sentecne wrods are: ${words.length}`)