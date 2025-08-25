import React from "../node_modules/react";
import Head from "./header";
import ReactDOM from "../node_modules/react-dom/client";
import Body from "./body";

function Github(){
    return (
        <>
            <Head></Head>
            <Body></Body>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Github/>);