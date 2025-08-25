import { useEffect, useState } from "react";

function Body(){
    
    const [Profile,setProfile] = useState([]);
    const [num,setnum] = useState("");
    async function data_fetch(num) {
        const ran = Math.floor(1+Math.random()*10000);
        const response = await fetch(`https://api.github.com/users?since=${ran}&per_page=${num}`);
        const data = await response.json();

        setProfile(data);
    }

    useEffect(()=>{
        data_fetch(20);
    },[])
    return(
        <><div className="but">
            <input type="text" placeholder="Search here" value={num} onChange={(e)=>{setnum(e.target.value)}}></input>
            <button onClick={()=>{data_fetch(Number(num))}}>Search</button>
            <div className="Profiles">
                {
                    Profile.map((val)=>{
                        return (
                            <div key={val.id} className="cards">
                                <img src={val.avatar_url}></img>
                                <h2>{val.login}</h2>
                                <a href={val.html_url} target="_blank">Profile</a>
                            </div>
                        )
                    })
                }
            </div>
            </div>
        </>
    )
}

export default Body;



// https://api.github.com/users?per_page=${count}
// https://api.github.com/users/taylorotwell
// https://api.github.com/users?since=6000&per_page=20