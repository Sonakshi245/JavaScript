const user = {
  username: "Sonakshi",
  price: 199,
  welcomemessage: function () {
    console.log(`${this.username}, Welcome to the website.`);
    console.log(this);
  },
};
// user.welcomemessage()
// user.username="Sam"
// user.welcomemessage();

// console.log(this)
// //Remember initially for executing the js engine was found only in browser hence "this" represents the window object.
// function chai(){
//     let username="Sonakshi"
//     console.log(this.username)
// }
// chai()

// const chai=function(){
//     let username="Sonakshi"
//     console.log(this.username)
// }

// const chai =  () => {
//   let username = "Sonakshi";
//   console.log(this.username);
// };
// chai()

// const addtwo=(num1,num2)=>{
//     return num1+num2
// }
// console.log(addtwo(3,7))

//Implicit return in arrow function
// const addtwo = (num1, num2) =>  num1 + num2;
const addtwo = (num1, num2) => ({username:"Sam"})
 console.log(addtwo(3, 7));