import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";


export default function Amin() {
    let [data, setData] = useState("")
    let [count, setCount] = useState(0)
    useEffect(()=>{
        const socket = io("http://localhost:5000/");
        console.log(socket)
        socket.on("FromAPI", data => {
            setData(data);
            setCount(data.data.length)
            console.log(data)
          });
    })

    return (
        <div>
            <h1>count: {count}</h1>
            {
                data.data && data.data.map(function(data){
                    return (<div key={data._id}>
                        <a>Name:{data.name}</a> {" "}
                        <a>Email: {data.email}</a> {" "}
                        <a>Phone: {data.phone}</a>{" "}
                    </div>
                    )
                })
            }
        </div>
    )
}