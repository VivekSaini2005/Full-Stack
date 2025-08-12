// let num1 = 231;
// let num2 = new Number(231);
// let num3 = new Number(231);
// console.log(num2);
// console.log(typeof num2);
// console.log(num1==num2);  //phele num1 number mei hi hai and num2 object se number mei convert hoga fir comparision hoga.
// console.log(num2==num3);  //dono same type(object) k hai isliye compare start ho jayga or jo value inki stack mei hai wo compare hogi rather than jo heap mei hai.



// let num = 231.68;
// console.log(num.toFixed(3));// point ke baad aap kitne digit chahte ho.
// console.log(num.toPrecision(4));//total kitne digit chahiye agr isme 2 daloge to ans = 2.3e+2 dega mtlb 23 mei change nhi karega 231.68 hi rehne dega
// console.log(num.toExponential(2));//point k baad kitne digit chahiye fir expo mei de dega
// console.log(typeof num.toString());//change to string 
// console.log(num.valueOf());//kuch nhi bs value bta deta hai.


// //  Math is a object
// console.log(Math.E) //E-> Eulers, log base e wala E hai
// console.log(Math.LN10);
// console.log(Math.PI);
// console.log(Math.LOG10E);

// // floor and ceil
// let num1 = 23.1;
// console.log(Math.floor(num1));
// console.log(Math.ceil(num1));

// console.log(Math.random()); //generates random number between 0 and 1 (0<=value<1).
// console.log(Math.random()*10) //generates random number between 0 and 9 (0<=value<1).
// console.log(Math.floor(Math.random()*10)); //generate accurate random number not in point 0-9.

// // 1-10 generate
// console.log(Math.floor(Math.random()*10)+1)

// // 11-20 generate
// console.log(Math.floor(Math.random()*10)+11);
// // 0-9 + 11

// // 0-9
// console.log(Math.floor(Math.random()*10));

// // 0-10  (0-9) isme + 1 nhi kr skte kyuki fir 0 kabhi aayga hi nhi.
// console.log(Math.floor(Math.random()*11));


// // min = 40 , max =50;
// console.log(Math.floor(Math.random()*(max-min+1)+min)); //General formula.
// // (max-min+1) batata hai ki kitne number generate karane hai or +min batata hai ki kaha se karane hai.


// // 2-12
// console.log(Math.floor(Math.random()*11+2));

// // 30-40
// console.log(Math.floor(Math.random()*(40-30+1)+30));

// // Ludo
// // 1-6
// console.log(Math.floor(Math.random()*(6-1+1)+1));
