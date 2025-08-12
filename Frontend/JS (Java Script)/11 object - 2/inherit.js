let user1 = {
    name: "Rohit",
    age: 20,
}



let user2 = {
    amount:20,
    money:50
}

user2.__proto__ = user1; // ab user2 user1 ki properties bhi use kr skta hai

let arr = [10,20,30,40];
console.log(arr.__proto__== Array.prototype) //true
console.log(arr.__proto__.__proto__== Object.prototype) //true
console.log(arr.__proto__.__proto__.__proto__== null) //true
