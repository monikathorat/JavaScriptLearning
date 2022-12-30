

// program to check if a number is prime or not

let number = 11;
let isPrime = true;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }

    //Program to count prime num upto 20 

    // var counter = 0;
    // for (var counter = 0; counter <= 20; counter++) {
    //     var notPrime = false;
    //     for (var i = 2; i <= counter; i++) {
    //         if (counter%i===0 && i!==counter) {
    //             notPrime = true;
    //         }
    //     }
    //     if (notPrime === false) {
    //                 console.log(counter);
    //     }
    // }

