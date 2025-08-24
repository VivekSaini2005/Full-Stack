import React, { useCallback, useEffect, useState } from "react";
import ReactDom from "react-dom/client";

function Passgen(){
    const [pass,setpass] = useState("");
    const [length,setLength] = useState(5);
    const [num,setnumber] = useState(false);//unchecked hoga agr true hota tooh checked hota.
    const [ch,setchar] = useState(false);

    const genpass = useCallback(()=>{
        let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        if(num) str+="0123456789";
        if(ch) str+="~!@#$%^&*()-+{}[]<>?";

        let p="";
        for(let i=0;i<length;i++){
            p+=str[Math.floor(Math.random()*(str.length))];
        }
        setpass(p);
    },[length,num,ch])
    // function genpass(){
    //     let str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
    //     if(num) str+="0123456789";
    //     if(ch) str+="~!@#$%^&*()-+{}[]<>?";

    //     let p="";
    //     for(let i=0;i<length;i++){
    //         p+=str[Math.floor(Math.random()*(str.length))];
    //     }
    //     setpass(p);
    // }

    useEffect(()=>{
        genpass();
    },[length,num,ch]) //[genpass] bhi dependency mei likh skte hai kyuki genpass tabhi chalega jab len,num,ch change hongi same baat hai.

    return(
        <>
            <h1>{pass}</h1>
            <div className="second">
                <input type="range" min={5} max={50} value={length} onChange={(e)=>{setLength(e.target.value)}}></input>
                <label>Length {length}</label>

                <input type="checkbox" defaultChecked={num} onChange={()=>{setnumber(!num)}}></input>
                <label>Number</label>

                <input type="checkbox" defaultChecked={ch} onChange={()=>{setchar(!ch)}}></input>
                <label>Special Character</label>
            </div>
        </>
        
    )
}

ReactDom.createRoot(document.getElementById("root")).render(<Passgen/>);
