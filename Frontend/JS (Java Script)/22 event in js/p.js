
// .addEventListener('action', call Back Function)
// const butt = document.querySelector("button");
// butt.addEventListener('click',()=>{
//     const red = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const b = document.getElementById("b");
//     b.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
// })



// document.addEventListener('keydown',()=>{ //document hamara pura webpage hai
//     const red = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const b = document.getElementById("b");
//     b.style.backgroundColor = "rgb("+red+","+green+","+blue+")";
// })

const d = document.getElementById("b");
d.addEventListener('click',(event)=>{
    console.log(event.clientX);
    console.log(event.clientY);
})