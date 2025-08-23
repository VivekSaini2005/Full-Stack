import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client"
import Color_background from "./07 color";

function Main(){
   
    const [count,setCount] = useState(0);

   return (
    <>
      <div className="counter">
      <h1>Counter is: {count}</h1>
      <button onClick={()=>{setCount(count+1)}} style={{backgroundColor:"blue"}}>Increment</button>
      </div>
      
      <Color_background></Color_background>
      <Color_background name={count}></Color_background>
   </>
   ) 
}
ReactDOM.createRoot(document.getElementById('root')).render(<Main></Main>);