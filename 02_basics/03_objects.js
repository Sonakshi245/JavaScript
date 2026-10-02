//singleton
//Object.create(By constructor)

//object literals

const mySym=Symbol("key1")
const Jsuser={
    name:"Sonakshi",
    [mySym]:"mykey1",
    age:"18",
    location:'Kannauj',
    email:"sonakshi@google.com",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]

}

// console.log(Jsuser.email)
// console.log(Jsuser["email"])
// console.log(Jsuser[mySym])

Jsuser.email="sonakshi@chatgpt.com";
//Object.freeze(Jsuser)
Jsuser.email="sonakshi@microsoft.com";
// console.log(Jsuser)

Jsuser.greeting=function(){
    console.log("Hello JS User");

}

Jsuser.greetingtwo=function(){
    console.log(`Hello JS User, ${this.name}.`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingtwo());