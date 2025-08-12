// // Map
// // In JS, a Map is a collection of key-value pairs where both the keys and the values can be any data type (primitive or object) Unlike regular JavaScript objects, a Mapmaintains the order of its elements based on insertion and alloes keys of any tyoe (even objects, functions, and primitive types), Whereas objects only allow strings or symbols as keys.
// // Operations :
// // set(key,values),get(keyk),has(key),delete(key),clear(),Size,
// // for(let[key,value] of map){console.log(key,value)}
// // map.forEach((value,keyk)=>{console.log(key,value);});
// // object mei key sirf string hoti thi lekin map mei key kuch bhi ho skti hai yaha tk ki ek object bhi key bn skti hai.
// // object mei key sorted order mei ati thi jab key int ho or map mei jis order mei likhoge wahi order rahega 
// // map ka type object rahega kyuki isko new keyword se banayange.
// //  key value pair: key should be unique


// const map1 = new Map();
// map1.set(3,90);             // 3 ko number hi treat karega jabki obj mei 3 ko string treat krta hai.
// map1.set("Rohit",45);
// map1.set(20,"Mohan");
// // map1.set("Rohit",40); value ko update karega

// map1.delete(3);


// console.log(map1);
// console.log(map1.has("Rohit"));  // for present key.
// console.log(map1.size);        // for size of map yaha size function nahi hai islye () nahi lagaya.
// map1.clear();
// console.log(map1);



// const map1 = new Map([[4,"rohit"],["Moahn","rohan"],[30,9], [63,78]]);
// console.log(map1);

// // for of loop
// for(let [key,value] of map1)  // let variable of map1 , ab variable ek-2 krke map1 k element ko access karega.
//     console.log(key, value);

// //console.log(map1["4"]); or onsole.log(map1[4]);   yeah undefine dega isse output nhi aayga.
