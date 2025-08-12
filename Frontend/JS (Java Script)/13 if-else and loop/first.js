// //  scope ke baare mein
// // Global scope , local scope(Functional scope) , block scope


// // Global scope wale (global variable) use accros within code
// let a = 10;
// var b = 20;
// const c = 30;


// // local scope: use within function
// function greet(){
//     let a = 10;
//     var b = 20;
//     const c = 30;
//     console.log("Hello Function");
//     console.log(a,b,c);
// };

// greet();
// console.log(c); //error dega access nhi kr skte.

// var amount = 400;
// var amount = 20;
// var amount = 10;



// // Block space: open-closed curly braces mei hi use hoga.
// for(let i=0;i<5;i++){
//     console.log(i);
// }
// console.log(i); // error dega loop ke bahar nhi de skte.


// if(true){
//     let a = 10;
//     // var amount = 20;
//     const c = 30;  
// }

// console.log(amount); //access ho jayga isliye hum var ka use nhi krte kyuki yeah block scope nhi hota.
// // var a = 4; var a = 5; yeah error nhi deta lekin jab let a=4; let a=5 karoge tooh error de dega let sirf ek hi bna skte ho.



// let amount = 20;

// if(true){
//     let amount =30;
//     console.log(amount);
// }
// // yaha pr amount error nhi dega kyuki uper wala amount global hai or if wala amount local hai.


// greet(); // run ho jayga baad mei declare krne k baad bhi.undefined dega
// function greet(){
//     console.log("Hello Greet");
// }


// meet(); // error dega run nhi hoga const function need be declared.
// const meet = function(){
//     console.log("Hello Meet");
// }


// console.log(v); //undefined dega lekin error nhi dega.
// var v=5;


// console.log(d); //error dega
// let d=4;
