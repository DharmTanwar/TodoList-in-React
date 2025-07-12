import { useState } from "react";

export default function Statepx(){
    let[count,setCount]=useState(0);
    let incCount=()=>{
        setCount(count+1);
    }
    let resetCount=()=>{
       setCount(count=0);
    }
    return(
        <>
        <h3>count={count}</h3>
            <button onClick={incCount}>click me!</button>
            <button onClick={resetCount}>Reset</button>

        </>
    )
}