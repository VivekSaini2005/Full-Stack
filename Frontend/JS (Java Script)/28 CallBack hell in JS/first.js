
// // callback function: function k ander ek dusra function.
// function fetchuser1(){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const name = "Rohit";
//     //   Data fetched from backend
    
//     greet(name);
//     },2000) // 2 sec baad print hoga, 2 sec baad user ka data(name) fetch kr liya.
// }

// function fetchuser2(){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const name = "Rohit";
//     //   Data fetched from backend
    
//     meet(name);
//     },2000)
// }

// function greet(name){
//     console.log(`Hello ${name}`);
// }

// function meet(name){
//     console.log(`Hello ${name}, I will meet you in Delhi`);
// }

// fetchuser1();
// fetchuser2();

// // Hme yaha pr agag-2 function bna rahe hai fetch1 and fetch2.
// // user ke data ko manipulate krne k liye hme arag-2 manipulation pr alag-2 function bna rahe hai.



// function fetchuser(callback){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const name = "Rohit";   // Data fetched from backend
//      callback(name);
//     },2000)
// }

// function greet(name){
//     console.log(`Hello ${obj.name}`);
// }

// function meet(name){
//     console.log(`Hello ${obj.name}, I will meet you in Delhi`);
// }

// fetchuser(greet);
// fetchuser(meet);
// // Ab yaha pr ek hi fetchuser hai jo 2 baar use ho jayga. Yaha callback function ka use hua hai.
// // Isse code length decrease.





// //  User data fectch: 
// // {
// //         name: "Rohit",
// //         age:28,
// //         city:"Delhi",
// //  }
// // 1: greet
// // 2: meet
// // 3: edit
// // 4: age
// // fetch the data and apply these properties.

// // Backend se data ek object ki form mei ata hai.
// function fetchuser(callback){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      //Data fetched from backend
//      const obj = {
//         name: "Rohit",
//         age:28,
//         city:"Delhi",
//      }
//      callback(obj);
//     },2000)
// }

// function greet(obj){
//     console.log(`Hello ${obj.name}`);
// }

// function meet(obj){
//     console.log(`Hello ${obj.name}, I will meet you in Delhi`);
// }

// function edit(obj){
//     console.log(`Edit ${obj.name}, of the user`)
// }

// function printAge(obj){
//     console.log(`User ${obj.age}`)
// }

// fetchuser(greet);
// fetchuser(meet);
// fetchuser(printAge);
// fetchuser(edit);




