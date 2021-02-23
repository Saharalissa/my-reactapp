import React, {useState} from 'react';
import Form from './form';
// This component is for 1_2 smile funnel
function Card ({data, cardIndex }) {
    const [status, setStatus] = useState(false);
    return (
        <div>
            {data[cardIndex].map(item => (
            <div className="card">
                <div onClick={() => setStatus(true)}>{item.Mild}</div>
                <div onClick={() => setStatus(true)}>{item.Moderate}</div>
                <div onClick={() => setStatus(true)}>{item.Severe}</div>
            </div> 
            ))}
           {/* <Form/> */}
           <div> 
                {status === true && <Form/>}
                {/* {status === false && null}         */}
            </div>

        </div>
    )
}

export default Card;