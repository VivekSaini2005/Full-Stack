import React, { useState,useMemo, useCallback, useEffect } from "react";
import ReactDOM from "react-dom/client";

function App(){

    const [num,setnum] = useState(0);
    const [fibnum,setfiboo] = useState([]);
    
    const fibbo = useCallback((n)=>{
        if(n<=1) return n;
        return fibbo(n-2)+fibbo(n-1);
    },[fibnum]);

    const result = useMemo(()=>fibbo(fibnum),[fibnum]);
    // useEffect(()=>{
    //     setfiboo(fibbo(fibnum));
    // },[fibnum])
    return (
        <>
            <div className="counter">
                <h2>Number : {num}</h2>
                <div className="but">
                    <button onClick={()=>{setnum(num+1)}}>Increment</button>
                    <button onClick={()=>{setnum(num-1)}}>Dncrement</button>
                </div>
            </div>
            <div className="fibo">
                <h2>Fibbonacci Number : {result}</h2>
                <div className="fnum">
                    <input type="number" value={fibnum} onChange={(e)=>setfiboo(e.target.value)}></input>
                </div>
            </div>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<App/>)