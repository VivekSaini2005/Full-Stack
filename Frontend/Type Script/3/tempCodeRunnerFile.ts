function total(...arr:number[]){
   let ans:number = 0 ;
   arr.forEach((val:number)=>ans = ans+val);
   console.log(ans);    
}


total(2,3,1,4,123,1,12,10);