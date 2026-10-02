//Dates

let myDate=new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleTimeString());

//let mycreateDate=new Date(2023,2,24)
//console.log(mycreateDate.toDateString())
//let mycreateDate2=new Date(2023,0,23,5,3)
//let mycreateDate2 = new Date("2023-01-14");
let mycreateDate2 = new Date("01-14-2023");
//console.log(mycreateDate2.toLocaleString());

let myTimeStamp=Date.now()

// console.log(myTimeStamp);
// console.log(mycreateDate2.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
// console.log(newDate);
// console.log(newDate.getMonth());
// console.log(newDate.getDay());

//`${newDate.getDay()} and the time

newDate.toLocaleString('default',{
    weekday:"long",
})
console.log(newDate);
