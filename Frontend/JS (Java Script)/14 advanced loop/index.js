// iteration over object and for in loop
let obj = {
    name: "rohan",
    age:23,
    gender:"male",
    city:"kotdwar"
};

// obj.toString()


// for in loop , I can iterate over keys in an object

for(let key in obj)
{
    console.log(key, obj[key]);
}

// Object.keys(obj)
console.log(Object.keys(obj));




// for in loop and Object.keys(obj) mei kya difference hai lets take example

let obj2 = Object.create(obj); //obj2 use the properties of obj.
obj2.money = 420;
obj2.id = "Roh";

console.log(Object.keys(obj2)); // yeah sirf money and id keys hi dega lekin for in loop obj or money,id  sbko key me de dega.



for(let key in obj2)
{
    console.log(key);
}
