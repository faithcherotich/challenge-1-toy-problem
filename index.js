
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGrade() {
    rl.question("Enter the student's marks (between 0 and 100): ", function handleInput(input) {
        let marks = parseInt(input, 10);

        if (isNaN(marks) || marks < 0 || marks > 100) {
            console.log("Invalid input. Please enter a number between 0 and 100.");
            rl.question("Enter the student's marks (between 0 and 100): ", handleInput);
        } else {
        
            let grade;
            if (marks > 79) {
                grade = 'A';
            } else if (marks >= 60) {
                grade = 'B';
            } else if (marks >= 49) {
                grade = 'C';
            } else if (marks >= 40) {
                grade = 'D';
            } else {
                grade = 'E';
            }

    
            console.log(`The grade is: ${grade}`);
            rl.close();
        }
    });
}
getGrade();