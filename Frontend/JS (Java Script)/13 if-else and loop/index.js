// // if- else
// let age = 7;

// if(age>=18)
// {
//     console.log("Eligble for vote");
// }
// else
// {
//     console.log("Not Eligible for vote");
// }

// // if - else if - else
// let age = 49;
// if(age<18)
// {
//     console.log("KID");
// }
// else if(age>45)
// {
//     console.log("OLD");
// }
// else
// {
//     console.log("YOUNG");
// }

// //  Multiple condition: switch

// let day = "0";

// switch(day)
// {
//     case 0:
//         console.log("SUNDAY");
//         break;
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Not a Valid Day");
// }

//  //loop : ek hi kaam ko baar baar karna


// for(let i=0;i<20;i++){  // har bar i ke liye new space allocate ho raha hoga isliye yeah slow hai C++ se.

//     console.log("Hello Coder Army") 
// }

//  //sum of first n number: 10 number
// let sum = 0;
// for(let i=1;i<=10;i++)
// {
//     sum+=i;
// }

// console.log(sum);



// // Nested for loop; Loop ke andar loop
// //1 2 3 4 5
// //1 2 3 4 5
// //1 2 3 4 5
// //1 2 3 4 5
// //1 2 3 4 5
// //1 2 3 4 5


// for (let i = 1; i <= 5; i++) {       // Outer loop → rows
//     let row = "";
//     for (let j = 1; j <= 5; j++) {   // Inner loop → columns
//         row += j + " ";
//     }
//     console.log(row);
// }


// for(let i=0;i<20;i++)
//     console.log(i);



// //  scope ke baare mein: 

// // while loop
// let i = 1;
// while(i<6)
// {
//     console.log(i);
//     i++;
// }



// //  do-while loop 
// let arr = [10,30,40,50];
// for(let i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }


// const obj = {
//     name:"Vivek",
//     age:30,
//     amount:420,
//     city: "Amroha"
// };

// // obj ki har ek value print krni hai. console.log(Object.values(obj)); bhi kr skte hai lekin loop se krna hai
// const key = Object.keys(obj); //key is array which have keys [ 'name', 'age', 'amount', 'city' ]

// for(let i=0;i<key.length;i++)
// {
//     console.log(obj[key[i]]);
// }


// // for in loop
// for(let key in obj){
//     console.log(key,":",obj[key]);
// }

// // Syntax
// for (let key in object) {
//     // yaha tum key ya value use kar sakte ho
// }








