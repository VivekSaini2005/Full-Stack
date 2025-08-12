// // const dat = new Date(); // yeah millisecond mei calculate krta hai from jan : 1 : 1970 : 12:00:00
// // console.log(new Date(1000)) // for 1 second
// // console.log(new Date(10000)) // jan 1 1970 se 10000 mili sec aage ka time batao.
// // // Why milisecond : time is critical in some cases as booking ticket, we decide throw time to assign ticket to customer who booked first.



// const d = new Date(); // yeah date system clock se le raha hai.
// console.log(d);   //2025-08-10T17:04:00.274Z (T is time zone, 17:04:00 -> exact time according to internation time zone.)
// console.log(d.toDateString()); //give in proper format
// console.log(d.toString()); //give in IST
// console.log(d.toISOString()); //give in ISO string format

// console.log(typeof d);


// console.log(d.getDate());


// // // Sun, Mon, Tue, Wed, Thu ,fri, Sat
// // //  0,   1,   2 ,  3,   4,   5,   6
// console.log(d.getDay());


// // Jan/feb/Mar
// //  0/  1/  2
// console.log(d.getMonth());

// console.log(d.getFullYear());
// console.log(d.getMilliseconds());
// console.log(d.getMinutes());
// console.log(d.getTime()); // give date in milisec from 1 jan 1970.
// const now = Date.now();// aslo give date in milisec from 1 jan 1970.


// // Number: 0 based start honge
// // String: 1 based start honge

// const d = new Date("2022-10-20"); // string k format mei date de skte hai or isme month 1 based hoga, jab hum month ko access krte hai tooh wo 0 based index se access hoga.
// console.log(d);
// const da = new Date("2022-10-20T10:10:12"); // T batata hai ki yaha se time start ho gaya hai.
// console.log(da);
// // Another formate
// const t = new Date(2025,7,11) // 11 aug 2025 mtlb  index 0 based hai number format mei.

// // year / Month / Date / Hour / Minute / second / millisecond    year and month dena compalsory hota hai.
// const date = new Date(2024,5,28, 10, 12,45, 231);
// console.log(date.toString());


// const datee = new Date();
// datee.setDate(20);
// datee.setFullYear(2021);
// datee.setMonth(3);
// console.log(datee);
// console.log(datee.toLocaleString());




// //  Date calculation

// const date1 = new Date();
// const date2 = new Date("2025-12-31");

// //  difference between date is in millisecond
// console.log(date2-date1); // result milisecond mei milega


// //  Countdown Timer for olympics
// // Days , hour, minute , second
// const date1 = new Date(); //current time 
// const date2 = new Date("2028-07-14T00:00:00"); //target time

// const date = date2-date1; // kitna dime baccha hai olympics start hone mei.
// console.log(date); // yeah millisec mei dega
// const days = Math.floor(date/(1000*60*60*24)); //1000 for ms, 60 sec, 60 min , 24 hour it give day

// const hour = Math.floor((date/(1000*60*60))%24); // %24 isliye lagaya kyuki hour points mei aayga or us points(decimals) wale digit ko hour mei change krne k liye 24 se mod kiya.
// // Assume kro ki 80 hours apke pass aye ab isme se kuch days honge jo alag ho chuke hai tooh hum sirf %24 krke hour nhikal lete hai jo ki 80%24 hota hai 8 hour means 3 days: 8 hours.
// // console.log(hour) 

// const minute = Math.floor((date/(1000*60))%60);
// console.log(minute);

// const second = Math.floor((date/(1000))%60);
// console.log(second);

// console.log(`Olympics CountDownTime: Days:${days} hour:${hour} minute:${minute} second:${second}`);








