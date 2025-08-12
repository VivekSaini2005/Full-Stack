// primitive data type

const num = 10;
// num = 5;     erro dega bcz of const type.
console.log(num);

// Non Primitive datatype
const obj = {
    id:10,
    balance:200
}

obj.id = 11;
console.log(obj);   //{ id: 11, balance: 200 } stack memory mei jo address diya hai wo change nhi ho skta wo tooh hamne change kiya hi nhi.

let obj2 = {
    id:20,
    money:30
};

// location of obj2 is 800
// location of obj is 6521

obj = obj2;
// error dega kyuki hum uski const obj ki location ko change krne ki kosis kr rahe hai.