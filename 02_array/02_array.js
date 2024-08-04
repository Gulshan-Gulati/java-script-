// singelton

const mySym = Symbol("key1")    //important

const JsUser = {
    name: "Gullu",
    "full name": "Gulshan Gulati",
    [mySym]: "myKey1",   //important
    age: 18,
    location: "Bbsr",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastloginDays:["Monday","Satuarday"]

}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])

JsUser.email = "gullu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "gullu@microsoft.com"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log(`Helllo Js User : ${this.name}`);
}
console.log(JsUser.greeting());