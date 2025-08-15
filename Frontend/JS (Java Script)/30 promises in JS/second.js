cart = ["pizza","coke","sandwich"];

// function placeOrder(cart , callback){
//     console.log("Talking with Domino's");
    
//     setTimeout(()=>{
//      console.log("Order Placed Succesfully");
//      const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
//      callback(order);
//     },2000)
// }

// function preparingOrder(order , callback){
//     console.log("Pizza preparation started....");

//     setTimeout(()=>{
//         console.log("Pizza preparation Done");
//         const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
//         callback(foodDetails);
//        },5000)
// };

// function pickupOrder(foodDetails,callback){
//     console.log("Reaching restaurant for picking order")

//     setTimeout(()=>{
//         console.log("Order picked up by Delivery Boy");
//         const droplocation = foodDetails.location;
//         callback(droplocation);
//        },3000)
// }

// function deliverOrder(droplocation){
//     console.log("Delivery boy on the way");

//     setTimeout(()=>{
//         console.log("Order Delivered succesfully");
//     },5000)
// }


// placeOrder(cart, callback);
// preparingOrder(order , callback)
// pickupOrder(foodDetails,callback)
// deliverOrder(droplocation)


// placeOrder(cart , (order)=>{
//     preparingOrder(order , (foodDetails)=>{
//         pickupOrder(foodDetails, (droplocation)=>{
//             deliverOrder(droplocation);
//         });
//     })
// });



// Create Promise
const p = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("Hello Coder Army");     
    },2000)
})
console.log(p);      // Promise { <pending> }
p.then((response)=>console.log(response));     //Hello Coder Army



function placeOrder(cart){
    console.log("Talking with Domino's"); 
    // Yaani humne Dominos ko call kiya order place karne ke liye

    const pr = new Promise(function(resolve,reject){
        // Yaha hum promise bana rahe hain, kyunki order place hone mein time lagta hai (asynchronous kaam)

        setTimeout(()=>{
            // 2 sec ka delay laga rahe hain, jaise Dominos ko confirm karne mein lagta hai

            const food_available = true; 
            // Maan lete hain ki food available hai

            if(food_available){
                console.log("Order Placed Succesfully");
                // Order place ho gaya

                const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"};
                // Order ka data bana liya (jaise order id, restaurant ka naam, location, etc.)

                resolve(order);
                // Promise ka kaam successful, isliye resolve karke order data return kar rahe hain
            }
            else{
                reject("Items Out of Stocks");
                // Agar food available nahi hota toh promise reject hota aur error aata
            }
        },2000)

    })

    return pr; 
    // Promise ko return kar diya, taaki chaining mein next step par jaa sake
}

function preparingOrder(order){
    console.log("Pizza preparation started....");
    // Order milte hi pizza banana start

    const pr = new Promise(function(resolve,reject){
        // Yeh bhi async kaam hai (pizza banane mein time lagta hai)

        setTimeout(()=>{
            console.log("Pizza preparation Done");
            // Pizza ban gaya

            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            // Token number, restaurant ka naam, aur location ki info

            resolve(foodDetails);
            // Promise complete, next step ko ye data de rahe hain
        },5000)
    })

    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    // Delivery boy restaurant pahunch raha hai

    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            // Pizza utha liya delivery boy ne

            const droplocation = foodDetails.location;
            // Delivery ka address

            resolve(droplocation);
            // Promise complete, ab ye drop location agle step ko milegi
        },3000)
    })

    return pr; 
    // Yeh return karna zaroori tha (warna chaining break ho jaati)
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");
    // Ab delivery boy raste me hai

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
        // Pizza customer ko mil gaya
    },5000)
}



// =================== Promise Chaining ===================
placeOrder(cart) // 1. Order place karne ka kaam
.then(order => preparingOrder(order)) // 2. Order milte hi pizza preparation start
.then(foodDetails => pickupOrder(foodDetails)) // 3. Pizza ready hone ke baad pickup
.then(droplocation => deliverOrder(droplocation)) // 4. Pickup ke baad delivery
.catch(error => console.log(error)); 
// Agar kahin bhi error hua toh ye catch usko handle karega



// const pr = new Promise(function(resolve,reject){
//        jo synchronous ho ya jisme time lge.
// })
// return pr;


