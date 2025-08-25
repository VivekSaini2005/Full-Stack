import React, { useState, useMemo, useCallback, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client"

function App(){
  
    const [count, setCount] = useState(0);
    let money = useRef(0);

    return (
        <>
        <div className="counter-money">
            <h1>Counter is: {count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>

            <h1>Money is: {money.current}</h1>
            <button onClick={()=>{
                money.current=money.current+1;
                console.log(money.current);
                }}>Increment</button>
        </div>
        </>
    )
  
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)