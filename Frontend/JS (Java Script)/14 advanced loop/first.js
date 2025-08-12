let obj = {};

obj.name = "Rohit";
obj.age = 20;
// key value writable enumerable configurable
console.log(Object.getOwnPropertyDescriptor(obj,'name'));
// By default writable enumerable configurable yeah true hote hai.
//  writable = false , value ko kya mein change kar sakta hu fasle -> nhi , true -> yes obj.name = "Mohit"

// configurable= true , kya hum writable enumerable configurable ko change kr skte hai ya nhi. false -> nhi kr skte

// how to change properties
let obj = {};
            //      object  key(which want to change prop)
Object.defineProperty(obj, 'name', {
    value:"rohit",
    writable:true,
    enumerable:true,
    configurable:true,
})
obj.name="mohit"; // change ho jayga.


let obj1={};
Object.defineProperty(obj1, "name",{
    value:"Rohit",
    writable:false,
})
obj1.name = "mohit";
console.log(obj1.name);  // name change hoga hi nhi Rohit hi rahega.



const obj1 = {
    name:"rohit",
    age:23,
    account_number:30001
};

Object.defineProperty(obj1, 'account_number',{
    writable:false
})
//Ab account number kabhi change hoga hi nhi.

obj1.account_number = 20001;
console.log(obj1.account_number);// account number change nhi hoga.







// enumerable: jis bhi key ka enumerable true hga, un sabka acces hoga ya print hoga for in loop ki help se.
//  Inherit hoke bhi koi bhi property or key aati hai , uska enumerbale true hua toh wo bhio print hga
//  Object.protoype
const customer = {
    name:"Rohit",
    age:23,
    account_number:123,
    balance:2000,
}

let customer2 = Object.create(customer);
customer2.city = "Haridwar";
customer2.place = "Delhi";

for(let key in customer2)      // sare properties involved honge
    console.log(key);

Object.defineProperty(customer, "name", {
    enumerable:false,
})

for(let key in customer2)      // sare properties print kr dega lekin name nhi dega kyuki iska enumerable false hai.
    console.log(key);
    


// Ary yeah sabhi properties ko print kr dega tooh toString() kyu nhi show kiya kyuki uska enumerable false hoga.
// To check toString() prop of object:
console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString')); // iska enumerable false hoga.


Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
} )

for(let key in customer)
    console.log(key);



