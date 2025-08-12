const map1 = new Map([[4,"rohit"],["Moahn","rohan"],[30,9], [63,78]]);
console.log(map1);

// for of loop
for(let [key,value] of map1)  // let variable of map1 , ab variable ek-2 krke map1 k element ko access karega.
    console.log(key, value);