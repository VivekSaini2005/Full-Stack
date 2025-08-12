// // // set : unique value
// // // A set in JS is a collection of unique values. It allows you to store values without duplicates, which makes it different from arrays. The values in a a Set can be of any type, such as primitives (numbers,strings, etc.) or objects.
// // // Operation: Add, Delete, Has, Size, Clear.

// let arr = [10,20,10,30,10]
// const set1 = new Set([10,20,30,40,10,30]);
// console.log(typeof set1);   //new keywoed aya hai tooh pakka object hi hoga.
// console.log(set1);


// const set1 = new Set();
// set1.add(4);
// set1.add(6);
// set1.add("Rohit");
// set1.add(30);
// console.log(set1);


// // // delete
// set1.delete(6);

// console.log(set1.size);


// // //Instagram user_id should be unique so use set.
// const user_id = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);
// let new_user = "rohit_negi9";
// console.log(user_id.has(new_user));


// user_id.clear(); //set ko empty bna dega.
// console.log(user_id);


// let arr = [10,30,20,10,40,50,30];
// const set1 = new Set(arr);  // convert array to set
// console.log(arr);
// arr = [...set1];           // convert set to array. arr mei sirf unique values hi rahegi.
// console.log(arr);



// // // Union of set
// let set1 = new Set([10,20,30,40,50]);
// let set2 = new Set([10,20,70,40]);

// let set3 = new Set([...set1,...set2]); // spread operator se value ek-2 krke bahar ati hai. Data sorted order mei nhi hoga jaise value dali hai ussi order mei hoga bs duplicate nhi honge.
// console.log(set3);


// // //intersection
// // //filter: array
// const result =  new Set([...set1].filter((num)=>set2.has(num))); // set 1 mei filter lagaya ki num set2 mei present hai ya nhi agr nhi tooh false return hoga or result mei store nhi hoga otherwise true.
// console.log(result)
// // //[...set1].filter((num)=>set2.has(num)) yeah arr ki form mei hoga isko set mei kro.



// // //Iterate over set

// // //for of: iterator
// for(let value of set1)
//     console.log(value);

// // //for each 
// set1.forEach((value)=>console.log(value));


