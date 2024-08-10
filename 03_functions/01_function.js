// function sayMyName(){
// console.log("G")
// console.log("U")
// console.log("L")
// console.log("S")
// console.log("H")
// console.log("A")
// console.log("N")
// }
// sayMyName()    //Execution
// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
//     let result = number1 + number2
 
//     return result;
// }
// // addTwoNumbers(4,null)
// // addTwoNumbers(4,"G")
// const result = addTwoNumbers(4,5)
// console.log("Result: ",result);


function loginUser(username = "Sam"){
    if(username === undefined){
        console.log("Please enter the unser name.")
        return
    }
    return `${username} just logged in`
}
console.log(loginUser("Gullu"))
