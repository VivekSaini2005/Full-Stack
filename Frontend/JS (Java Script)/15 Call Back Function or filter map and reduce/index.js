// let user= {
//     name:"rohit",
//     age:30
// }


// Object.defineProperty(user, 'name',{
//     writable:false,
// });

// user.name = "mohit";
// // Hacking se bachne ke liye humeine ye sab kiya hai

// console.log(Object.getOwnPropertyDescriptor(user, "name"))


// // for of loop : sidha value pr access deta hai.
// const arr = [10,20,11,18,13];
// for(let value of arr)
// {
//     console.log(value);
// }

// let str = "Rohit is Good Boy";
// for(let value of str)
// {
//     console.log(value);
// }

// //don't use for of loop in object
// const obj = {
//     name:"Chavvi",
//     age:22,
//     gender:"female"
// };

// console.log(obj);

// // for(let value of obj){ // error obj is not iterable but array is iterable.
// //     console.log(value);
// // }

// for(let value of Object.keys(obj)) // Object.keys(obj) yeah ek array return krke dega, jisse for of loop chal jayga.
//     console.log(value, obj[value]);


// //forEach

// let arr = [10,20,30,40,50];
// //  single argument: number
// //  second index
// //  third: array ko bhi pass



// //arr.forEach(CallBackFunction)

// arr.forEach(function (num){  // array k element num mei aayange or ek-ek krke print karate rahange.
//     console.log(num);
// });



// const greet = function (num){
//     console.log(num);
// }
// console.log(greet)


    
//     arr.forEach((num)=>{
//         console.log(num);
//     })
//     arr.forEach(num => console.log(num))

// arr.forEach((num,index,a) => {
//     a[index] = num*2;
// });

// console.log(arr);





// //filter
// let arr = [10,22,33,41,50];
// arr.filter((num)=>{
//     return num%2==0; // it give only true or false therfore we use num%2==0. arg true hua tooh element select else not select.
// })
// const result = arr.filter((num) => num%2==0);

// console.log(result);

// const students = [
//     {name:"Rohan", age:22, marks:70}, 
//     {name:"Mohan", age:24, marks:80},
//     {name:"Darshan", age:28, marks:30},
//     {name:"Mohit", age:32, marks:40},
//     {name:"Shadik", age:12, marks:90},
// ] // student is array of stack.

// const result = students.filter((obj)=>{
//       return obj.marks>50;
// })
// console.log(result);

// const res = students.filter((value)=> value.marks >50);
// console.log(res);

// const r = students.filter(({marks})=> marks >50); //value of marks object hai.
// console.log(r);





// //map : value ko modify bhi kr skte hai lekin filter mei sirf filter kr skte hai.

// const arr = [1,2,4,5]
// const resu = arr.map((num)=>{
//     return num*num;
// })
// console.log(resu);

// //forEach mei map or filter nhi ata mt use krna.
// //const re = arr.forEach((num)=>{
// //    return num;
// //}) wrong, no return


// const res = arr.map((num,index)=> num*index);

// console.log(res);


// const ar = [1,2,3,4,5,6];


// //even number filter kro, unka square likho or fir unko 2 se divide krke store kra do.
// const result = ar.filter((num)=> num%2==0).map((num)=> num*num).map((num)=>num/2);
// console.log(result);

// // Reduce , iske discussion karenge....


