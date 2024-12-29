for(let i=1;i<=10;i++)
    {
        console.log(i);
    }
    //1
    
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
    //2
    // for (let i = 1; i <= 10; i++) {
    //     if (i % 2 != 0) {
    //         console.log(i);
    //     }
    // }
    
    let r=1;
    while(r<=10)
        { 
            if (r% 2 != 0) {
            console.log(r);
        }
        r++;
}
    //3

    // let number=parseInt(prompt(7));
    let number=10;
    for (let i = 1; i <= 12; i++) {
    console.log(number + " x " + i + " = " + (number * i));
    }




    let sum = 0;
    let i = 1;
    while (i <= 100) {
        sum += i;  
        i++;   
            
            
    console.log( "sum ="+sum);
    }
    

    // let numbere=parseInt(prompt("Enter the number"));
    // let factorial = 1;

    //     for (let i = 1; i <= numbere; i++) {
    //     factorial *= i;  
    //     console.log( factorial);
    // }

    let numbr=12;
    let factorial=1;
    for (let i = 1; i <= numbr; i++) {
            factorial *= i;  
            console.log( factorial);
        }
    

    
//   let numbe = parseInt(prompt("please enter the num"));


// let a = 0;
// let b = 1;

// console.log("" + numbe + ":");

// while (a <= numbe) {
//     console.log(a);  
//     let next = a + b;  
//     a = b; 
//     b = next;  
// }

let numbers = [5, 10, 15, 20];

// Set the index to the last number of the array
let index = numbers.length - 1;

// Using a while loop to print the numbers in reverse order
while (index >= 0) {
    console.log(numbers[index]);  // Print the number at the current index
    index--;  // Decrease the index to move to the previous number
}
