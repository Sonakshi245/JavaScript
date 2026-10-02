//for of

const arr = [1, 2, 3, 4, 5];

// for(const num of arr){
//     console.log(num)
// }

// const greeting ="Hello World!"
// for(const greet of greeting){
//     console.log(greet)
// }

//Maps : They have unique values
const map = new Map();
map.set("IN", "India");
map.set("EN", "England");
map.set("FR", "France");

//console.log(map)

for (const [key,value] of map) {
  console.log(key , ":-" ,value);
}

const myobject={
    game1:"dr driving",
    game2:"candy crush"
}

// for(const[key,value] of myobject){
//     console.log(key,":-",value)
// } here for of synatax is not working for objects.

