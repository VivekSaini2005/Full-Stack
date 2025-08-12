//call back function : ek function k agrument mei dusre function ko bjena.

function names(fun){
    console.log("Hello I am name");
    fun(); // yeah greet mei jayga 
}
function greet(){
    console.log("I am call Back function");
}

names(greet);


function names(fun){
    console.log("Hello I am name");
    fun();
}


const greet = function (){
    console.log("I am call Back Function");
}

names(greet);




names(function (){
    console.log("I am call Back Function");
});



names(()=>{
    console.log("I am call Back Function");
});




function fetchData(){
    // bhut saara 
    console.log("I am fetching data");
}



setInterval(fetchData,5000); //fetchData function har 5000 ms ke baad execute hoga.





