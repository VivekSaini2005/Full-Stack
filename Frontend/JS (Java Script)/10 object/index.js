// // // how to create object
// // const ojt = {
// //     name: "Vivek",         // name store in string format in backend as "name":"Vivek"
// //     acc_bal: 50000,
// //     gender: "Male",
// //     age: 21
// // }
// // console.log(ojt);

// // //Accessing 
// // console.log(ojt.age);
// // console.log(ojt["age"]);



// const obj = {
//    0:20,                    // 0 as a string store hoga "0": "20"
//    1:50,
//    2:70, 
//    name:"rohit", 
//    account_balance:420,
//    gender: "Male",
//    age: 30,
//    "account number": 231230,
//    undefined: 30,
//    null:"mohan",
// }

// console.log(obj["undefined"]); // Access kr skte hai aslo obj[undefined], obj.undefined also for null
// console.log(obj["null"]);


// console.log(obj.gender);
// console.log(obj["account_balance"]);
// console.log(obj["account number"]);
// console.log(obj['0']);
// console.log(obj[1]); //inverted comma lagane ki jarurat nhi hai. fir bhi output de dega.
// console.log(obj[2]);
// console.log(obj);


// // array object hi hai jaise hum object mei obj.gender ko access krte hai waise hi array mei array.length() ko access krte hai. Jaise object kaam kr raha hai key-value mei ase hi object krta hai jaise humne uper 0 ind 20, 1 ind 50 and 2 ind 70 then access thow obj[0/1/2] and in arr[0/1/2]. Same kaam ko raha hai.


// //  second method to create
// const person = new Object();
// console.log(person);

// // property add
// person.name = "Rohit";
// person.age = 80;
// person.gender = "Male";

// console.log(person);


// // delete
// delete person.age;
// console.log(person);


// // Modify or update
// person.name = "Mohit";
// console.log(person);




// // third method  rewrite of code nhi hone deta agr 3 person banane hai object se tooh iss tareke ke kr skte hai rather than create seprate object 3 times.

// class People{
//     constructor(na, ag, gen){
//         this.name = na;
//         this.age = ag;
//         this.gender = gen;
//     }
// }
// let per1 = new People("Vivek", 21, "Male");
// let per2 = new People("Mohit", 30, "Male")
// let per3 = new People("Aman", 20, "Male")
// console.log(per1);
// console.log(per1, per2);



// // Common methods on objects
// let obj = {
//     name: "Vivek Saini",
//     age:30,
//     account_balance:420,
//     gender:"male"
// };

// //  keys , values
// const keyarr = Object.keys(obj);   //sarre keys dega
// console.log(keyarr);
// const valarr = Object.values(obj);  // sarre value dega
// console.log(valarr);

// // keys; value
// const arr2 = Object.entries(obj); // key value pair dega 2d array ki form mei
// console.log(arr2);          


// // assign use case
// const obj1 = {a:1,b:2};
// const obj2 = {c:3,d:4};
// const obj4= {e:5,f:6};

// // const obj3 = Object.assign(obj1,obj2); //yeah dono ko join kr dega lekin object 1 ko change kr dega or obj2 ko nhi karega kyuki obj1 hamara source object hai.
// // console.log(obj3);
// // console.log(obj1); // obj1 change ho gya. isko rokne k liye hum source object mei empty object daal dete hai jo bhi change hoga empty mei hoga.
// // const obj3 = Object.assign({},obj1,obj2);  // yeah ek copy create krta hai.
// // console.log(obj3);
// // console.log(obj1); // ab obj1 change nhi hoga.
// const obj5 = Object.assign({},obj1,obj2,obj4); 
// console.log(obj5);


// const obj6 = {...obj1,...obj2,...obj4};
// console.log(obj6);








