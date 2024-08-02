const name = "Gullu"
const repoCount = 50

// console.log(name + repoCount + "Value");
console.log(`Hello my name is ${name} and my repo count is $ {repoCount}`);

const gameName = new String('Hello_Gullu')
console.log(gameName[0]);
console.log(gameName[1]);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt('1'));

console.log(gameName.indexOf('t'));
const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);

const newStringOne ="  hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://www.youtube.com/@gulshangseries8762"
console.log(url.replace('@gu','_'));
