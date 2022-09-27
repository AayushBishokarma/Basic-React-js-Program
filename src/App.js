import React,{useState} from "react";
import './style.css';
const App = () => {
    const [number,setNumber]=useState(0)
    return <div>
        <h1>TIME COUNTER</h1>
     <p>{number}</p>
        <button onClick={()=>setNumber(number-1)} className="button">-</button>
        <button onClick={()=>setNumber(0)} className="button">RESET</button>
        <button onClick={()=>setNumber(number+1)} className="button">+</button>

    </div>

}
export default App;