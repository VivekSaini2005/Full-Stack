// for in loop : Isko array ke sath nahi lete
//  arr is an object
// 0: 10,
// 1:20,
// 2:40,
// 3:12,
// 4:30,
// name:"rohit",
// age:20,

const arr = [10,20,40,12,30];
arr.name = "Rohit"; // arr is a object tooh hum asse bhi likh skte hai.
arr.age = 20;

for(let key in arr){  // yeah sirf keys ko hi print karega
    console.log(key);
}
// name or age ka enumerable by default true hoga isliye arr mei for in loop ka use nhi krte.
// Normal for loop kabhi bhi name or age ko print nhi karega.
for(let index=0; index< arr.length; index++){
    console.log(index,arr[index]);
}


//  defineProperty
// defineProperties
