const name = "Sonakshi";
const repocount = 60;

//console.log(name+repocount+" value")

//console.log(`Hello my name is ${name} and my repo count is ${repocount}.`)

const gameName = new String("sonakshi-tripathi");

//console.log(gameName[0]);
//console.log(gameName.__proto__)
//console.log(gameName.toUpperCase());
//console.log(gameName.length);

//console.log(gameName.charAt(2))
//console.log(gameName.indexOf("n"));

const newString = gameName.substring(0, 4);
console.log(newString);
//Substring cannot have negative indexing
const anotherString = gameName.slice(-8, 14);
console.log(anotherString);

const newStringOne = "   sonakshi   ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://sonakshi.com/sonakshi%20tripathi";

console.log(url.replace('%20','-'))

console.log(url.includes('sonakshi'))

const special="Sonakshi hc com"
console.log(special.split( ""));