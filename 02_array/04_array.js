// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123ddfdh"
tinderUser.name = "Gullu"
// console.log(tinderUser);

const regularUser = {
    email: "abc@gmail.com",
    fullname : {
        username: {
            firstName : "Gullu",
            lastName : "Gulati"
        }
    }
}
// console.log(regularUser.fullname);
// console.log(regularUser.fullname.username.firstName);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
const obj4 = {5: "a", 6: "e"}
// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({}, obj1,obj2,obj4)
// console.log(obj3);

const obj6 = {...obj1,...obj2}
// console.log(obj6);

const users = [
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email : "abc@gmail.com"
    },
    {
        id: 1,
        email : "abc@gmail.com"
    },
]

users[1].email
// console.log(tinderUser)

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "122",
    faculty : "GUllu sir"
}
// const {faculty} = course
// console.log(faculty);    //Distructure way to print
// console.log(course.price);




//++++ JSON API ++++

// ++++ Object ++++
// {
//     "name":"ABC",
//     "coursename":"js in hindi",
//     "price": "free"
// }
  //  ++++ Array ++++
[
    {},
    {},
    {}
]


