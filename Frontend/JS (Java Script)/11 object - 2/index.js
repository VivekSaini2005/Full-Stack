// let obj1 = {
//     a:1,
//     b:2
// }

// let obj2 = obj1;
// // shallow copy: jo change obj2 mei karoge wo obj1 mei bhi ho jayga.
// obj2.a=10;
// console.log(obj1);


// // //  deep copy : isme obj3 ko change krne pr bhi obj1 mei change nhi hoga.
// let obj3 = structuredClone(obj1);
// obj3.a = 20;
// console.log(obj3);
// console.log(obj1);


// //  Nested object
// const user = {
//     name:"Vivek",
//     balance: 420,
//     address: {
//         pincode: 244221,
//         city: "Subodh Nagar"
//     }
// }

// // // console.log(user.address.pincode);


// const user2 = Object.assign({},user);
// console.log(user2);

// user2.address.pincode = 321314; //user ke ander ka jo obj hai(nested obj) change ho jayga lekin kisi ko bhi change karoge wo nhi karega.
// console.log(user2.address.pincode);
// console.log(user.address.pincode); // change ho gya
// user2.name="Any";
// console.log(user.name); // change nhi hoga.
// // jab bhi clone banana ho tooh structure clone ka use krna.


// //  Destructruing of an object : jab kuch value chahiye
// let obj = {
//     name: "Rohit",
//     money: 430,
//     balance: 30,
//     age: 20,
//     aadhar: "hfdsiohsai"
// };

// // const {name, balance, age} = obj;
// // console.log(name,balance,age);
// const {name:full_name , balance: amount, age:Umar} = obj;
// console.log(full_name,amount,Umar); // console.log(name) error dega, kyuki name ab full_name mei gya hai.


// const {name, age,...obj1} = obj; // name, age assign kr do or baki ki properties obj1 ko de do.
// console.log(name,age);
// console.log(obj1);


// // Destruction hum array k sath bhi kr skte hai.
// const arr = [3,2,1,5,10];
// const [first,second] = arr;
// console.log(first,second);
// const [first,second, ,third] = arr; // first-1, second-2, 1 skip, third-5.
// const [first,second,...third] = arr; // first-1, second-2, baki(rest) ko third mei daal do.
// console.log(third);   //   ...  isko rest operator bolte hai



// let obj = {
//         name: "Vivek",
//         age: 20,
//         arr: [90,40,60,80],
//         address: {
//             pincode:244221,
//             city:"Subodh Nagar",
//             state: "UP"
//         }
// };

// const {address: add} = obj; // isse address ke sarre prop add mei chale jayange
// console.log(add); 
// // ab humko iske sirf prop hi chahiye tooh uske liye {} iska use kro
// const {address:{pincode}} = obj;
// console.log(pincode);
// // const {address:{pincode, city}} = obj; // to extract pincode and city.


// const {arr: [first]} = obj; // array mei jao first element ko access kr lo.
// console.log(first);



// // Object k ander function bhi daal skte hai.
// let user = {
//     name: "Rohit",
//     amount: 420,
//     greet: function(){                     // greet is a key.
//         console.log("Hello Coder Army");
//     },
//     meet: function(){
//         return 20;
//     }
// }
// user.greet();
// console.log(user.greet()); // function ko screen pr kr rahe ho isliye undefined aayga
// console.log(user.meet());

// let obj = {
//     name:"Rohit",
//     amount:420,
//     greet: function(){
//         return 10;
//     }
// }


// console.log(obj.toString()); // .toString ko tooh humne banaya hi nhi fir bhi run kr gya.
// // same as for arr is an object
// let arr = [2,3,1,8];
// arr.push(10);// yeah push() kaha se aa raha hai?

// // go to console in web create obj/arr type obj.__proto__ then properties occurs which you used in your arr/obj.






