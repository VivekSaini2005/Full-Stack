
// console.log() Yeah ek function hai.. yeah function key value ke format mei store rehte hai.
// console.log("Hello World"); yeah function k ander argument pass kiya hai.
// Math.random() yaha random() function.
// Tooh Yeah function aa kaha se rahe hai? yeah sab globalobject se aa rahe hai. In c++ function library se ate hai.


// // globalobject: object  har environment mei globalobject ka naam alag alag hoga jaise ki chrome ka hai window.
// // Chrome Browser: window
// // Nodejs: global  // hum isko use kr rahe hai vs code mei.

// jab chrome mei access krte hai tooh window.math.random() krte hai 
// jab VS code (js) mei access krte hai tooh global.math.random() krte hai 
// window or global (chrome or Nodejs) yeah advantage dete hai ki math. and global. ko use na bhi kro fir bhi code chalega.
// alag-2 environment k liye alag-2 globalobject hai isliye globalThis ka use kiya.
// use globalThis.Math.random();


// // setInterval(); 
// // new Object();
// //  new String("Rohit");
// setInterval, new String, new Object   ko global mei jake dhundega or waha se lekr aayga.


// "use strict"
// a = 10;
// console.log(a);  // if "use strict" present then give error else print 10.

// let obj = {
//     name:10
// }
    
// Object.freeze(obj);
// obj.name = 30;
// console.log(obj); //if strict present then give error else not change the value of key "name".
    