const tinderUser=new Object()//singleton
//const tinderUser={}//Non Singleton

tinderUser.id="123abc"
tinderUser.name="Sam"
tinderUser.isLoggedIn=false

//console.log(tinderUser);

const regularUser={
    email:"sonakshi@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Sonakshi",
            lastname:"Tripathi"

        }


    }
}

//console.log(regularUser.fullname.userfullname.lastname)

const obj1={1:"A",2:"B"}
const obj2={3:"C",4:"D"}

// const obj3={obj1,obj2}
//const obj3=Object.assign({},obj1,obj2)

const obj3={...obj1,...obj2}
//console.log(obj3)

const users=[//This is basically an array consisting of objects
    {
        id:'1',
        email:"abc@g.com"

    },
    {
        id:"2",
        email:"def@g.com"
    }
]
//console.log(users[1].email)

// console.log(tinderUser);

// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser));
// console.log( Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//Destructuring of objects
const course={
    coursename:"JS in English",
    price:99,
    courseInstructor:"Sonakshi"
}

//console.log(course.courseInstructor)

const {courseInstructor:instructor}=course
// console.log(courseInstructor)
console.log(instructor)

//APIs Json Format
// {
//     "name":"Sonakshi",
//     "coursename":"Js in English"
// }