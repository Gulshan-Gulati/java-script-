// for(let index = 0 ; index < 10; index++){
//     console.log(index);
// }

// for(let i = 0; i<=10; i++){
//     const element = i;
//     if(element == 5){
//         console.log("5 is best number");
//     }
//     console.log(element);
        
// }

// for(let i = 0; i<=10; i++){
//     console.log(`Outer loop value: ${i}`);
//     for(let j = 0; j<=10; j++){
//         console.log(i + '*' + j + ' = ' + i*j);
//     }    
// } 
for(let i = 0; i<20; i++){
    if(i == 5){
        console.log(`Detected 5`);
        // break;
        continue
    }
    console.log(`value of i is ${i}`);
}