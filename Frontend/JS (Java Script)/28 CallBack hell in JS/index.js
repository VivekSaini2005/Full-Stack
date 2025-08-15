// //  call back hell

// // call back function: function ke ander function -> fetchuser(greet);

// // Domino's pizza order kar rahe ho:
// function placeOrder(){
//     console.log("Talking with Domino's");
//     setTimeout(()=>{  // 2 sec baad order place ho jayga.
//      console.log("Order Placed Succesfully");
//     },2000)
// }
// // placeOrder();


// // Preparing Pizza
// function preparingOrder(){
//     console.log("Pizza preparation started....");

//     setTimeout(()=>{ // 5 second baad pizza prepared.
//         console.log("Pizza preparation Done");
//     },5000)
// };
// // preparingOrder();


// // Delivery Boy order ko pick karega.
// function pickupOrder(){
//     console.log("Reaching restaurant for picking order")

//     setTimeout(()=>{ //3 sec baad pick karega.
//         console.log("Order picked up by Delivery Boy");
//        },3000)
// }
// // pickupOrder();


// // for diliver order.
// function deliverOrder(){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{ //take 5 sec
//         console.log("Order Delivered succesfully");
//     },5000)
// }
// // deliverOrder()


// placeOrder();
// preparingOrder();
//     Talking with Domino's
//     Pizza preparation started....
//     Order Placed Succesfully
//     Pizza preparation Done
// // Mai chahata hu ki phale mera pizza placed ho jye fir prepartion start ho lekin output mei mera order place hua hi nhi or preparatioin phale hi start ho gyi.


// // We can done it by callback function. As all print in an order. Agr deliverorder k baad preparingorder karoge tooh jab tk deliverd nhi hoga tb tk prepare hoga hi nhi.
// // Domino's pizza order kar rahe ho:
// function placeOrder(callback){
//     console.log("Talking with Domino's");
//     setTimeout(()=>{  // 2 sec baad order place ho jayga.
//         console.log("Order Placed Succesfully");
//         callback();
//     },2000)
// }
// // placeOrder();


// // Preparing Pizza
// function preparingOrder(callback){
//     console.log("Pizza preparation started....");
//     setTimeout(()=>{ // 5 second baad pizza prepared.
//         console.log("Pizza preparation Done");
//         callback();
//     },5000)
// };
// // preparingOrder();


// // Delivery Boy order ko pick karega.
// function pickupOrder(callback){
//     console.log("Reaching restaurant for picking order")
//     setTimeout(()=>{ //3 sec baad pick karega.
//         console.log("Order picked up by Delivery Boy");
//         callback();
//     },3000)
// }
// // pickupOrder();


// // for diliver order.
// function deliverOrder(){
//     console.log("Delivery boy on the way");
//     setTimeout(()=>{ //take 5 sec
//         console.log("Order Delivered succesfully");
//     },5000)
// }
// // deliverOrder()


// placeOrder(preparingOrder);
//     Talking with Domino's
//     Order Placed Succesfully
//     Pizza preparation started....
//     Pizza preparation Done




// // // callback function look like
// placeOrder(()=>{
//     preparingOrder(()=>{
//         pickupOrder(()=>{
//             deliverOrder();
//         });
//     })
// });
//     Talking with Domino's
//     Order Placed Succesfully
//     Pizza preparation started....
//     Pizza preparation Done
//     Reaching restaurant for picking order
//     Order picked up by Delivery Boy
//     Delivery boy on the way
//     Order Delivered succesfully

// // isko call back hell bhi bolte hai, isse hamara code messy ho jayga, as 50 layer.
// // disadvantages : code messy, dependency on other function.
