const arr = [2,35,1,8,9,"rohit",true,8];
// length
console.log(arr.length);

// Access in array
console.log(arr[1]);
console.log(arr.at(-2));
// at is latest, negative index le leta hai

// create a new array

const newa = arr;
console.log(newa==arr);

const newarr = structuredClone(arr); //arr ka copy heap mei create ho jaygi, it is helpful.
console.log(newarr==arr);

// push, add element at end

arr.push(30);
arr.push(50);
console.log(arr);

// pop , pop the last element from array
arr.pop();
arr.pop();
arr.pop();
console.log(arr);

// unshift , add element at start

arr.unshift(10);
arr.unshift(30);
console.log(arr);

// shift, delete element from start
// [2,35,1,8,9,"rohit"];
arr.shift();
console.log(arr);

// delete operation
// [10,2,35,1,8,9,"rohit"];
delete arr[0];    //delete tooh ho jayga lekin waha pr space chor dega ek hole create ho jayga uski jagha pr. isko use mt krna
console.log(arr);
console.log(arr.indexOf(8)) //return first occurance of 8.
console.log(arr.lastIndexOf(8)); // return last index of 8.
console.log(arr.includes(10));

// slice
console.log(arr);
let a = arr.slice(2,5); // same as string, 5th index not included, original array mei koi cange nhi hoga.
console.log(a);
console.log(arr);

// splice
console.log(arr);
let newsplice = arr.splice(2,5); //2nd index se start kro 5 element le lo, original array se splice wala part (2nd index se 5 element) hta dega.
console.log(newsplice);
console.log(arr);

// splice(starting_index,total_element_delete,add value) // starting_index se total_element tk delete kr do fir jitni bhi value chahiye wo sab starting_index pr add ho jayange.
arr.splice(2,0,"money",90);
console.log(arr);
console.log(arr.toString());// change of string with comma(,).
console.log(arr.join()); // string mei convert kr deta hai bs jo comma sepration hai usko chane kr skte hai.
console.log(arr.join("*"));


// concat
let arr1 = [2,35];
let arr2 = [5,12];
let arr4 = [23,432,1123,31];
let arr3 = arr1.concat(arr2,arr4);
console.log(arr3);

arr1.push(arr4); // ab yeah 2D array ki tarah kaam karega.
console.log(arr1);
console.log(arr1[2]);
console.log(arr1[2][0]);

// 2d array
let arr2d = [[1,2,3],[4,5,6],[7,8,9]];
// [1,2,3]
// [4,5,6]
// [7,8,9]
console.log(arr2d);

// flat ka use to convert into 1d array
let newar = arr2d.flat();
console.log(newar);
// flat()  -> flat(1)  
// if you have 3d array then use arr.flat(2);
// if you have 4d array then use arr.flat(3);
// if you are confuse about dimenstion of array then use arr.flat(infinite).


// To identify that given variable is array or not.
let abc = [2,1,4,1];
console.log(typeof abc);
console.log(Array.isArray(abc));


// New way to create Array.
let ac = new Array(2,1,4,1,"Vivek");
console.log(ac.length);
console.log(ac);
// not feasable method bcz when you write new Array(10) then 10 is not a element it is size of array.
// arg array mei single element dalna hai tooh yeah use mt krna.
let arrr = new Array(10);
console.log(arrr.length); 
console.log(arrr);
