/*let myName ="Sonakshi    "
let mychannel ="Unstoppable   "

console.log(myName.trueLength());*/


let myHeros = ["thor",'spiderman']


let heroPower = {
    thor:"hammer",
    spiderman:"sling",

    getSpiderPower:function(){
        console.log(`Spidy power is${this.spiderman}`);
    }
}

Object.prototype.sonakshi = function(){
    console.log(`Sonakshi is present in all objects.`);

}



Array.prototype.heySonakshi=function(){
    console.log(`Sonakshi says hello`);

}

///heroPower.sonakshi();
// myHeros.sonakshi();
// myHeros.heySonakshi();
//heroPower.heySonakshi();


//inheritance


const User={
    name:'Sonakshi',
    email:"Sonakshi123@gmail.com"
}


const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__= User

//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername="Lucy   "

String.prototype.trueLength=function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is:${this.trim().length}`);
}

anotherUsername.trueLength()
"iceTea".trueLength()
"Sonakshi".trueLength( )

