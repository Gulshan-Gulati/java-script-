let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023,1,23,5,4)
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date(2024,8,3,9,5);
// console.log(myCreatedDate.toLocaleString());
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date("08-04-2024")
// console.log(myCreatedDate.toLocaleString());    //  OutPut :- 8/4/202, 12:00:00 AM

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myTimeStamp.getTime()); //not running
console.log(Date.now());
console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());
// newDate.toLocaleString('default', {
//     weekday : "Long",
// })


