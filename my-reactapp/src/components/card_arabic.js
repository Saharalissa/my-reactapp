import React, {useState} from 'react';
import Form from './form';
// THE PURPOSE OF THIS COMPONENT IS ONLY ONLY ONLY TO ADD THE ARABIC SUBMIT BUTTON (احصل على نتائج التقييم)
// This component is for 1_2 smile funnel
function Card ({props, data, cardIndex}) {
    const [status, setStatus] = useState(false);
    const [severity, setSeverity] = useState("");
    // title from Card component = active from Quality component
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("")

    return (
        <div>
            {data[cardIndex].map((item, index) => (
            <div className="card" key = {index}>
                {console.log(item.title)}
                <div></div>               
                <div className="severity-card" onClick={() => {setStatus(true); setSeverity("Mild"); setTitle(item.title); setType("standard"); setName("Crowded")}} key = {0}>{item.Mild}</div>
                <div className="severity-card" onClick={() => {setStatus(true); setSeverity("Moderate"); setTitle(item.title); setType("standard"); setName("CrossBite")}}  key = {1}>{item.Moderate}</div>
                <div className="severity-card" onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title); setType("plus"); setName("Spaced")}}  key = {2}>{item.Severe}</div>
                {/* <div  onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title); setType("plus")}}  key = {3}>{item.malocclusionType}</div>
                <div  onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title); setType("plus")}}  key = {4}>{item.output}</div> */}
                {console.log(severity)}
                <div></div>             
           </div>
            ))}

           <div> 
                {/* {status === true && <Form/>} */}
                {/* {status === false && null} */}
                {status === true && <button onClick={() => {console.log("malocclusionType:",title); console.log("caseSeverity:",severity); console.log("caseType:", type ); }}>احصل على نتائج التقييم</button>}
           </div>
        </div>
    )
}

export default Card;
