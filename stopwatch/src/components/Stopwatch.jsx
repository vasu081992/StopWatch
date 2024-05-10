import React, { useEffect } from "react"
import {useState} from "react"


const Stopwatch = () =>{

const [time,settime] = useState(0)
// const[timerid,settimerid]=useState()

const [flag,setflag] = useState(false)

const timerOn = ()=>{
    setflag((prev)=>(!prev))
}

const timerOff=()=>{
    settime(0)
    setflag(false)
}

const formatTime = (time)=>{

    let minutes = Math.floor(time/60);
    let remainingSeconds = time%60;
    //let precisedNum = remainingSeconds.toPrecision(2)
    return `${minutes}:${remainingSeconds<10?"0":""}${remainingSeconds}`
}

useEffect(()=>{
    console.log("flag state now",flag)
    let timer;
    if(flag){
        timer = setInterval(()=>{
             settime((prev)=>prev+1)
         },1000)
         console.log(timer)
     }
// else{
//     console.log("timer cleared")
//     clearInterval(timer)
// }

return ()=> {
    console.log(timer)
    clearInterval(timer)
}

},[flag])

    return (
        <>
        <h1>Stopwatch</h1>
        <div>Time: {formatTime(time)}</div>
        <button onClick={timerOn}>{ flag ? "Stop" : "Start" } </button>
        <button onClick={timerOff}>Reset</button>
       
        </>
    )
}

export default Stopwatch
