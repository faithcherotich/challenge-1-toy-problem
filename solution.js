const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question("Enter the speed of the car: ", (inputSpeed) => {
    const speed = parseFloat(inputSpeed);

    if (isNaN(speed) || speed < 0) {
        console.log("Invalid input. Please enter a valid speed.");
    } else {
        const speedLimit = 70;
        const aboveSpeedLimit = speed - speedLimit;

        if (aboveSpeedLimit <= 0) {
            console.log("Ok");
        } else {
            const numberOfDemerits = Math.ceil(aboveSpeedLimit / 5);
            
            if (numberOfDemerits <= 12) {
                console.log(`Points: ${numberOfDemerits}`);
            } else {
                console.log("License suspended");
            }
        }
    }

    rl.close();
});