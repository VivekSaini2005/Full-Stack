// let m: any;
// m = 20;
// console.log(m.toUpperCase()); //error nhi dega

// // let var2: unknown;
// // var2 = 10;
// // console.log(var2.toUpperCase()); //error dega likhte samay "'var2' is of type 'unknown'."

// let var2: unknown;
// var2 = 10;
// if(typeof var2 === 'string')
// console.log(var2.toUpperCase()); //ab likhte samay error nhi dega.


// interface Person{
//     name:string,
//     age:number,
//     gender:string,
//     aadhar?:number  //?-> optional keyword isse lagane se jab bhi object banaoge tooh aadhar likho ya mt likho koi farak nhi padega.
// }


// const obj:Person = {
//     name: "Rohit",
//     age: 20,
//     gender: "Male",
// }// agr aadhar ? nhi hota tooh jusko obj mei likhna hi padta werna error deta.


// // Latest example

// interface customer {
//     name:string,
//     age:number,
//     balance:number
// }

// const obj2: Partial<customer> = {
//     name:"Rohit",
//     balance:210,
// }

// obj2.name = "Vivek"; //error dega likhte samay.

// // Partial: All property becomes optional
// // Required: ALl property should be filled
// // Readonly: The property can only be read, write option is not available


// array of Objects

// interface people {name:string,age:number};
// interface manager {salary:number,id:string}

// const arr: (people | manager)[] = [{name:"Rohit",age:20},{name:"Mohit",age:18}, {salary:20,id:"2321"}]

// // // function in TS


// function greet(a:number):number{ //first number represent data-type of a, second number represent return data-type of function.
//     console.log(a);
//     return a+5;
// }

// console.log(greet(10));


// function meet(msg:string,val:number):void{ //passing two argument with no return type'
//     console.log(msg,val);
// }


// meet("Anshika Verma", 4);
// default parameter
// function neet(msg:string = "Jit"){
//     console.log(msg);
// }

// neet();
// neet("Bittu");


// // // Optional Parameter
// function GATE(person?:string){
//     console.log(person||"Mohan");
// }

// GATE("Rohit");
// GATE();


// // // arrow function

// const sum = (a:number,b:number):number=>{
//     return a+b;
// }

// console.log(sum(3,4));


// // callback function



// const sqaureroot = (val:number)=>{
//        return val*val;
// }
    
    
// type chill = (amount:number)=>void;

// function placeOrder(order:number,callback: (amount:number)=>void):void{
//     const amount:number = order+10;
//     callback(amount);
// }


// placeOrder(10,(amount)=>{
//     console.log(amount);
// })



// // Rest Parameter


// function total(...arr:number[]){
//    let ans:number = 0 ;
//    arr.forEach((val:number)=>ans = ans+val);
//    console.log(ans);    
// }


// total(2,3,1,4,123,1,12,10);





// // extend keyword
// interface human{
//     name:string,
//     age:number
// };

// interface Teacher extends human{
//    salary:string,
//    id:number
// }

// interface BankEmployee extends human{
//     salary: string,
//     position: string
// }

// const obj:Teacher = {
//     name :"Rohit",
//     age: 20,
//     salary:"chillar",
//     id:123
// }







