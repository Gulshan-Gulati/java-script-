// // const score = 400
// // console.log(score)

// // const balance = new Number(100)
// // console.log(balance);

// // console.log(balance.toString().length);
// // console.log(balance.toFixed(2));

// // const val = 123.4567
// // console.log(val.toPrecision(4));

// // const hundreds = 1000000
// // console.log(hundreds.toLocaleString('en-IN'));



// // ++++++++++++         MATHS          ++++++++++++++++++

// console.log(Math)    //object hota hai
// console.log(Math.abs(-4));    // convert negative to positive integer
// console.log(Math.round(4.7));  //Roundof to integer
// console.log(Math.ceil(4.2));  // Next number
// console.log(Math.floor(4.9)); //Previous Number  
// console.log(Math.min(4,4,5,24,32,21,7,8,9));  //minmum value
// console.log(Math.max(44,5,2,55,4,7,8,9));  //  maximum value

console.log(Math.random());  //Random value between 0 & 1
console.log(Math.random()*10); //to get value greater than 1
console.log(Math.floor(Math.random()*10) + 1); // to get minimum value at least 1 

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)))