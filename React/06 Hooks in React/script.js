import React, {useState} from "react"
import ReactDOM from 'react-dom/client'



function Counter(){

    let [count, setCount] = useState(2);

    function incrementnumber(){
        count = count + 1;
        setCount(count);
        // setCount(count+1) yeah bhi likh skte ho uper wali do line ki jagah
        // console.log("count value is: " , count);
        // document.querySelector('h1').innerText = `Count is ${count}`;
    }

    function decrementnumber(){
        count = count - 1;
        setCount(count);
        // setCount(count-1) yeah bhi likh skte ho uper wali do line ki jagah
        // console.log("count value is: " , count);
        // document.querySelector('h1').innerText = `Count is ${count}`;
    }

    return (
       <div className="first">
            <h1>Count is: {count}</h1>
            <button onClick={incrementnumber}>Increment {count}</button>
            <button onClick={decrementnumber}>Decrement {count}</button>
       </div>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)