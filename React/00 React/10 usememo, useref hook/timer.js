import React, { useState, useRef} from "react";
import ReactDOM from "react-dom/client";

function App(){

    const [t,settime] = useState(0);
    const ur = useRef(null);
    const [isrun , setisrun] = useState(false);

    function start(){
        if(!isrun){
            ur.current = setInterval(()=>{
                settime((pt)=>{return pt+1}); // settime(pt=> pt+1);
            },1000)
            setisrun(true);    
        }
    }
    
    function stop(){
        if(isrun){
            clearInterval(ur.current);
            ur.current = null;
            setisrun(false);
        }
    }

    function reset(){
        clearInterval(ur.current);
        ur.current = null;
        settime(0);
    }
    return(
        <>
            <h1>Timer : {t}</h1>
            <button onClick={()=>start()}>Start</button>
            <button onClick={()=>stop()}>Stop</button>
            <button onClick={()=>reset()}>Reset</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)