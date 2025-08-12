
// //reduce
// const arr = [10,20,30,40,50];

// // const result = arr.reduce(callback function, initialization)
// const res = arr.reduce((acc,curr)=>{ // final result acc mei store hoga. curr is like element of arr.
//      acc = acc+curr;
//      return acc;
// },0)  // yaha 0 ka mtlb hai ki initalization mtlb acc mei start mei 0 rahega.
                  
// const result = arr.reduce((acc,curr)=> acc+curr, 0);

// console.log(result);



// let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
// // //final result ek object ke form mei dena hai. phale element fir unki freq.
// // //initialization {} pass krna tooh acc mei object store hoga.

// const result = arr.reduce((acc,curr)=>{
//     if(acc.hasOwnProperty(curr))    // kya acc ke ander curr walli prop hai?
//         acc[curr]++;                // agr acc object mei curr hai freq increase kr do.
//     else
//       acc[curr]=1;                  // agr acc object mei curr nahi hai tooh usko acc mei add kr do.
//     return acc;
// },{}) 
// console.log(result);
// obj.hasOwnProperty(val)  yeah batata hai ki obj ke pass val hai ki nhi.



// const result = arr.reduce((acc,curr)=>{
//     acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;
//     return acc;
// },{})

// console.log(result);