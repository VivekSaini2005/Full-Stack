import React, {useState,useEffect} from "react";
import ReactDom from "react-dom/client";

// Background Color changer

function Color_background(){

    console.log("Call from Color_background");
    const [color, setColor] = useState("black");//ek variable color jisko black color assing ho jayga.
    useEffect(()=>{
        document.body.style.backgroundColor = color;
        // console.log("render");
    },[color]);

    return (
        <>
            <h1>Background Color Changer</h1>
            <div className="but">
                <button style={{backgroundColor:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button style={{backgroundColor:"blue"}} onClick={()=>setColor("blue")}>Blue</button>
                <button style={{backgroundColor:"orange"}} onClick={()=>setColor("orange")}>Orange</button>
                <button style={{backgroundColor:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button style={{backgroundColor:"pink"}} onClick={()=>setColor("pink")}>Pink</button>
            </div>
        </>
    )
}

// ReactDom.createRoot(document.getElementById("root")).render(<Color_background></Color_background>);
export default React.memo(Color_background);