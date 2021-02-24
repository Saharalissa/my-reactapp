import React, {useState} from 'react';
import Form from './form';
// This component is for 1_2 smile funnel
function Card ({data, cardIndex}) {
    const [status, setStatus] = useState(false);
    const [severity, setSeverity] = useState("");
    const [title, setTitle] = useState("");
    return (
        <div>
            {data[cardIndex].map(item => (
            <div className="card">
                  {console.log(item.title)}
                <div onClick={() => {setStatus(true); setSeverity("Mild"); setTitle(item.title)}} key = {0}>{item.Mild}</div>
                <div onClick={() => {setStatus(true); setSeverity("Moderate"); setTitle(item.title)}}  key = {1}>{item.Moderate}</div>
                <div onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title)}}  key = {2}>{item.Severe}</div>
                {console.log(severity)}
           </div>
            ))}
           <div> 
                {/* {status === true && <Form/>} */}
                {/* {status === false && null} */}
                {status === true && <button onClick={() => {console.log(severity); console.log(title) }}>Get results</button>}
           </div>

        </div>
    )
}

export default Card;