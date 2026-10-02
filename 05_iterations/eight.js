const mynums=[1,2,3]

//  const myTotal=mynums.reduce(function (acc,curval){
//     console.log(`acc:${acc} and currval:${curval}`)
//     return acc+curval
//  },0)


const mytotal=mynums.reduce((acc,currval) => acc+currval,0)

//  console.log(mytotal)

const shoppingcart = [
  {
    itemname: "js course",
    price: 2999,
  },
  {
    itemname: "py course",
    price: 999,
  },
  {
    itemname: "mobile dev course",
    price: 5999,
  },
  {
    itemname: "data science course",
    price: 12999,
  }
]

 const pricetopay=shoppingcart.reduce((acc,item) => acc+item.price,0)
 console.log(pricetopay)