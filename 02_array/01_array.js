// // const myArr = [0,1,2,3,4,5,true,"Gulshan"]
// // const myHero = ["Motu-patlu","Chota-Bheem"]
// // const arr = new Array(2,1,4,6,5,7,8,9)
// // console.log(myArr[7]);
// // console.log(myHero[1]);
// // console.log(arr[2]);

// const myHero = ["Motu","patlu","Chota-Bheem","Chingam"]

// const cricketer = ["Rohit","Virat","Shikhar","Bumrah"]

// // myHero.push(cricketer)
// // // console.log(myHero);  //same array
// // console.log(myHero[4])  //same array

// // const allHeroes = myHero.concat(cricketer)  //this will return or store in new array
// // console.log(allHeroes)

// // const allNew_Heroes = [...myHero,...cricketer] // this will also return in new array
// // console.log(allNew_Heroes)

// const jsArr = [1,2,[4,5,6],7,[8,6,[4,5]]]
// const anotherjsArr = jsArr.flat(Infinity)
// console.log(anotherjsArr)

console.log(Array.isArray("Gulshan"))
console.log(Array.from("Gulshan"))

console.log(Array.from({name:"Gulshan"})) //Interesting for interview

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3));