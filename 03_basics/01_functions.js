// console.log("J")
// console.log("A");
// console.log("V");
// console.log("A");

function say(){
    console.log("J");
    console.log("A");
    console.log("V");
    console.log("A");

}
//say()

//say => reference , say() => execution

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);

// }

function addTwoNumbers(number1,number2){
//     let result=number1+number2;
//     return result;
return number1+number2;
}


const result=addTwoNumbers(3,7)
// console.log("Result :",result)

// function loginusermessage(username){
//     return `${username} just logged in.`

// }

// console.log(loginusermessage("Sonakshi"))

function userloginmessage(username="Sam"){
    if(username === undefined){
        console.log("Please enter a username")
        return
    }
    
        return `${username} just logged in.`
   
}

//console.log(userloginmessage());

function calculatecartprice(val1,val2,...num1){
    return num1
}
//console.log(calculatecartprice(200,400,500,2000))

const user={
    username:"Sonakshi",
    price:199
}

function handleobject(anyobject){
   // console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleobject(user)
handleobject({
    username:"Sam",
    price:399
})

const mynewarr=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(mynewarr))