

// TS kehta hi ki jo kuch bhi use kr rahe ho uska type batana padega, number,string, boolean, even object ke ander k functions.
// Hamara browser TS ko nhi samajta wo sirf (html, css, js) ko samajta hai tooh phale hme TS ko js mei badalna padega wo kaam karega compiler.
// jo code js mei likh skte hai wo ts mei bhi run ho jayange.

// Number
let a:number = 10; // a hamesa ek number hi lega. 
let b:number = 20;
// a="Vivek" yeah error de raha hoga likhte samay. jab isko run karaoge tooh yeah js mei convert kr dega but error dega or wo js file error nhi degi.

// string
let str:string = "Rohit";

// boolean
let isExist:boolean = true;
isExist = false;

// bigint
// let bignumber:bigint = 132143292183n; yeah error dega kyuki bigint 2020 mei aya tha or hamara code 2016js version mei convert krke run kra raha hai. Lekin code ko js mei convert kr dega.

// null
let abc:null = null;
let bcd:undefined=undefined;
// bcd = "Mohan"; yeah error dega kyuki bcd undefined hai.

let names:string = "Moahn";
let honey:number = 20;

const ho:number = 17;


// Compile time language
// Interprted language
// JIT: Just in time

// let x = 20;
// x = "rohit";