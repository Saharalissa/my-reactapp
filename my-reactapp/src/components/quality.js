import React, {useState} from 'react';
import Card from './card';
import Data from './Data';
import crowded from '../images/funnel3/crowded.png';
import crossbite from '../images/funnel3/crossbite.png';
import spacing from '../images/funnel3/spacing.png';
// This component is for 1_2 smile funnel
function Quality () {
    const [active, setActive] = useState("");
    return (
        <div>
            <nav>
                <img src ={crowded} onClick={()=> setActive("Crowded")}/>
                <div>Crowded</div>
                <img src ={crossbite} onClick={()=> setActive("CrossBite")}/>
                <div>Crossbite</div>
                <img src ={spacing} onClick={()=> setActive("Spaced")}/>
                <div>spaced</div>
                {console.log(active)}
            </nav>
        <div> 
                {active === "Crowded" && <Card data={Data} cardIndex={0}/>}
                {active === "CrossBite" && <Card data={Data} cardIndex={1}/>}
                {active === "Spaced" && <Card data={Data} cardIndex={2}/> }
                {console.log(Data)} 
        </div>
        </div>
    )
}

export default Quality;