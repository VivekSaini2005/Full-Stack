// // //  JS is a single threaded synchronous(ek k baad ek execute) language:
// console.log("10"); 
// console.log("20");
// console.log("30");

// // // JS bheviour: Async can be achieved. 
// // Part 1
// console.log("10");
// setTimeout(() => {
//     console.log("20");
// }, 2000);
// console.log("30");
// Output: 10 30 20



// // single threaded: One task will be executed at a time:
// // Part 2
// console.log("10");
// const timer = Date.now();
// // timer Older time
// while(Date.now()-timer<2000){
//     // Wait for 2 second
// }
// console.log('20');
// console.log("30");
// Output: 10 20 30

// Asa q ho raha hai dono part 20 ko print karane k liye 2 second le rahe hai but output change aa raha hai.
// asa isliye ki Part1 is behave like asynchronous and setTimeout JS ka part nhi hai, yeah web API ka part hota hai.
// jab JS synchronous way mei execute ho rahi hai tooh setTimeout JS ka part na hone ki wajah se usko webAPI ko execute karane ko de deta hai or phir agli line mei chala jata hai.
// part2 mei line by line execution ho raha hai mtlb JS hi 2 sec wait karega fir next line execute karega.

