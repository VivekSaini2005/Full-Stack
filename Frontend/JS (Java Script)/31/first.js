const cart = ["Pizza","Coke", "sandwich"];

function placeOrder(cart){
    console.log("Talking with Domino's");
     
    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            
           const food_available = true;
            if(food_available){
            console.log("Order Placed Succesfully");
            const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
            resolve(order);
            }
            else{
                reject("Items Out of Stocks");
            }
           },2000)

    })


    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started....");

    const pr = new Promise(function(resolve,reject){

        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
           },5000)
    })

    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
           },3000)

    })
    
    return pr;
    
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}


// placeOrder(cart)
// .then(order=>preparingOrder(order))
// .then(foodDetails=>pickupOrder(foodDetails))
// .then(droplocation=>deliverOrder(droplocation))
// .catch(error=>console.log(error));

// yeah thoda kam samaj ata hai
// or niche wala acche se samaj ata hai.

// const order = placeOrder(cart);
// const foodDetails = preparingOrder(order);
// const droplocation = pickupOrder(foodDetails);
// deliverOrder(droplocation);

// lenkin hum isko directly use nhi kr skte hme pata hai ki yaha callback function hai jo time le raha hai tooh order ki full detail aaygi nhi or yeah preparingOrder(order) ko call kr dega.
// isliye hum await ka use krte hai or yeah await wale async function mei hone chahiye tabhi kam karega. await ko function mei use krte hai ase khule mei use nhi kr skte.

// async function greet() {
//     const order = await placeOrder(cart);  // await apne code ke niche walo ko nhi chalata unko wait karata hai. Wait karega jab tk data data na aa jye.
//     const foodDetails = await preparingOrder(order);
//     const droplocation = await pickupOrder(foodDetails);
//     deliverOrder(droplocation);
// }
// greet()



// How to handle error in it.

async function greet() {


    try{
    const order = await placeOrder(cart);
    const foodDetails = await preparingOrder(order);
    const droplocation = await pickupOrder(foodDetails);
    deliverOrder(droplocation);
    }
    catch(error){
        console.log(error)
    }
    
}

greet();



function test1(){

    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },5000)
    })

    return p1;

}


function test2(){
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },5000)
    })

    return p2;

}



// p1.then(value=>console.log(value));

// p2.then(value=>console.log(value));


// console.log(p1);
// p1.then((response)=>console.log(response));

// async function greet() {
     
//     const data1 = await test1();
//     // console.log("Hello Coder Army");
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);
// }

// greet();


// async function meet() {
    

// }

// meet().then(value=>console.log(value));








