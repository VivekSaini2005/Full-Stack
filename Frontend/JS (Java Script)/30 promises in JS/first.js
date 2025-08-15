// // Callbackhell

// // async task
// // weather: 


// const obj = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`);
// console.log(obj);
// Output: Promise { <pending> }
// fetch operation kuch time lega data ko fetch kerne liye. ab hum wait kre bina print kra rahe hai.

// {/* ab hum kuch time de dete hai  */}

// setTimeout(()=>{
//     console.log(obj);
// },2000)
// Output:
// Promise {
//   Response {
//     status: 403,
//     statusText: 'Forbidden',
//     headers: Headers {
//       date: 'Thu, 14 Aug 2025 07:38:53 GMT',
//       'content-type': 'application/json',
//       'transfer-encoding': 'chunked',
//       connection: 'keep-alive',
//       vary: 'Accept-Encoding',
//       server: 'BunnyCDN-SG1-858',
//       'cdn-pullzone': '93447',
//       'cdn-uid': '8fa3a04a-75d9-4707-8056-b7b33c8ac7fe',
//       'cdn-requestcountrycode': 'IN',
//       age: '0',
//       'cache-control': 'no-cache',
//       'content-encoding': 'gzip',
//       via: '1.1 varnish (Varnish/7.1)',
//       'x-varnish': '167436206',
//       'cdn-proxyver': '1.34',
//       'cdn-requestpullsuccess': 'True',
//       'cdn-requestpullcode': '403',
//       'cdn-cachedat': '08/14/2025 07:38:53',
//       'cdn-edgestorageid': '977',
//       'cdn-requestid': '720ac6880a2d1e05e31f1cdf8dada054',
//       'cdn-cache': 'MISS',
//       'cdn-status': '403',
//       'cdn-requesttime': '0'
//     },
//     body: ReadableStream { locked: false, state: 'readable', supportsBYOB: true },
//     bodyUsed: false,
//     ok: false,
//     redirected: false,
//     type: 'basic',
//     url: 'http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes'
//   }
// }


// // Hamko nhi pata ki humara fetch kitne time me data fetch kr raha hai.

// obj.then(callback function)  and obj is know as promises obj
// obj.then((data)=>{  // yeah tab chalega jab value obj mei aa chuki hogi.
//     console.log(data);
// });
// // Output: same as above



// obj.then((data)=>{  // yeah tab chalega jab value obj mei aa chuki hogi.
//     console.log(data);
// }).catch((error)=>{  // error de dega agr data fetch nhi ho paya ya phir source ne permission nhi di.
//     console.log(error);
// })

// // three state 
// // 1. pending (data fetch kr raha hai)
// // 2. resolve (obj.then mei jayga)
// // 3. reject (.catch mei jayga)

// // Promise ke 3 states hote hain:
// // Pending → Abhi chal raha hai (result nahi aaya)
// // Fulfilled → Successfully complete hua (resolve)
// // Rejected → Error hua (reject)


// Jo hamare pass data aya hai wo header part hai body nhi hai tooh body ko access krne k liye obj.json()
// obj.then((data)=>{  
//     console.log(data.json());
// })
// // Output: Promise { <pending> } // yeah bhi time lega.


// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
// Promises.then((response)=>{
//     const pro = response.json();
//     pro.then((data)=>{
//         console.log(data);
//     })
// })

//                 //   OR

// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
// const pro2 = Promises.then((response)=>{
//     return response.json();
// })
// pro2.then((data)=>{
//     console.log(data);
// })

//                 //    OR

// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
// Promises.then((response)=>{
//     return response.json();
// }).then((data)=>{
//     console.log(data);
// })

//                 // OR

// const Promises = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
// Promises
// .then(response=>response.json())
// .then(data=>console.log(data))
// //isko promises chain bolte hai.

//                 // OR

// fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=London&aqi=yes`)
// .then(response=>response.json())
// .then(data=>console.log(data))
// .catch(error=>console.log(error));

