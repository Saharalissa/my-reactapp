import React, {useState} from 'react';
import Form from './form';
// This component is for 1_2 smile funnel
function Card ({data, cardIndex}) {
    const [status, setStatus] = useState(false);
    const [severity, setSeverity] = useState("");
    // title from Card component = active from Quality component
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");

    return (
        <div>
            {data[cardIndex].map(item => (
            <div className="card">
                {console.log(item.title)}
                <div onClick={() => {setStatus(true); setSeverity("Mild"); setTitle(item.title); setType("standard")}} key = {0}>{item.Mild}</div>
                <div onClick={() => {setStatus(true); setSeverity("Moderate"); setTitle(item.title); setType("standard")}}  key = {1}>{item.Moderate}</div>
                <div onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title); setType("plus")}}  key = {2}>{item.Severe}</div>
                <div onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title); setType("plus")}}  key = {3}>{item.malocclusionType}</div>
                <div onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title); setType("plus")}}  key = {4}>{item.output}</div>
                {console.log(severity)}
           </div>
            ))}

           <div> 
                {/* {status === true && <Form/>} */}
                {/* {status === false && null} */}
                {status === true && <button onClick={() => {console.log("malocclusionType:",title); console.log("caseSeverity:",severity); console.log("caseType:", type ); }}>Get results</button>}
           </div>
        </div>
    )
}

export default Card;