//Primitive

//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt

const score=100;
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id === anotherId)

const bigNumber = 345025698741525510n



//Reference (Non primitive)

//Array,Objects,Functions

const heros = ["Shaktiman","naagraj","doga"];
let myObj = {
    name:"Sonakshi",
    age:"20",
}

const myFunction=function(){
    console.log("Hello World");
}

console.log(typeof myFunction)


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//Stack(primitive),Heap(Non-Ptrimitive)

let myYoutubename = "Sonakshi.singgs"

let anothername=myYoutubename
anothername="khushisings"

console.log(myYoutubename);
console.log(anothername)

let userone={
    emal:"user@google.com",
    upi:"user@ic"
}

let usertwo=userone
usertwo.email="sonakshi@google.com"

console.log(userone.email)
console.log(usertwo.email);
