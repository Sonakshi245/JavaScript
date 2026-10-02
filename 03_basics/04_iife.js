//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    console.log(`DB Connected`);
})();

// (function cother() {
//named IIFE
//   console.log(`DB Connected Two`);
// })()

(() =>{
  console.log(`DB Connected Two`);
})();

((name) => {
  console.log(`DB Connected Two ${name}`);
})("Sonakshi");