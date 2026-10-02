//if

const userloggedin = true;
const temperature = 41;

// if(temperature<50){
//     console.log("Temp less than 50")
// }
// else{
//     console.log("Greater than 50")
// }
// console.log("Executed");
//<,>,<=,>=,==,===,!=,!==

const score = 200;

if (score > 100) {
  const power = "fly";
  console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);

//Shorthand Notation
const balance = 100;
 //if(balance>500) console.log("test"),console.log("test2");

if (balance < 500) {
  console.log("less than 500");
}
else if (balance < 750) {
  console.log("less than 750");
}
else if(balance<900){
    console.log("less than 900")
 }
 else (
    console.log("Less than 1200")
 )

 const userLoggedin = true;
 const debitcard = true;
 const loggedinfromgoogle = false;
 const loggedinfromEmail = true;

 if(userLoggedin && debitcard){
    console.log("Allowed to buy course")
 }

 if(loggedinfromgoogle || loggedinfromEmail){
    console.log("User Logged in.")
 }