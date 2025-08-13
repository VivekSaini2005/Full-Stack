
// // The this keyword in JavaScript is a special keyword that refers to 
// // the context in which the current code is being executed. 
// // Its value depends on how the function where this is used is called.


// // 1: Global Context (Outside Any Function)
// // In browsers: window 
// // In Node.js: Module's exports object 


// console.log(this);
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}  output chrome k console pr dekhega.






// // ****************************************************************


// // 2:Inside a Function 
// // i: (Non-Strict Mode)
// // When this is used inside a regular function, it refers to the global object.
// // ii: Strict Mode
// // this will be undefined inside a function.



// // function greet(){
// //     console.log(this);
// // }

// greet(); Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// window.greet(); Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// // ****************************************************************

// // 3: Inside a Method (Object Context)
// // When this is used inside an object’s method, it refers to the object that owns the method.

// const obj ={
//     name:"Rohit",
//     age:20,
//     meet: function(){
//         console.log(this);      //this keyword object ko point karega, islye hum this.name bhi access kr skte hai.
//     }
// }

// obj.meet(); {name: 'Rohit', age: 20, meet: ƒ}




// // ****************************************************************

// // Arrow functions don’t have their own this. 
// // Instead, they inherit this from the surrounding (lexical) scope.

// let obj = {
//     name:"rohit",
//     age:11,
//     greet: ()=>{
//         console.log(this); //iske bahar wala jo environment hai (obj) uske this ko point karega or obj ka this global ko point kr raha hai.
//     }
// }

// obj.greet();Window {window: Window, self: Window, document: document, name: '', location: Location, …}



// let obj = {
//     name:"rohit",
//     age:11,
//     greet: function(){
        
//         let ab = ()=>{
//             console.log(this); //ab yeah wala this obj ko point karega.Iske bahar wala environment greet function(not arrow function) hai or iske paas sirf obj ki prop hi hai.
//         };
//         ab();
//    }
// }
// obj.greet();{name: 'rohit', age: 11, greet: ƒ}


// let greet = ()=>{
//     console.log(this);
// }

// greet(); //Window {window: Window, self: Window, document: document, name: '', location: Location, …}




// // Inside a Constructor or Class
// // In constructors and classes, this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let a = new Person("Rohit", 20);
// console.log(a);
