// Stack (Primitive), Heap (Non-Primitive)
let myYoutubename = "GulshaGSeries"
let anothername = myYoutubename
anothername = "javaScriptCode"
console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "userabc@gmail.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "gulati@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);