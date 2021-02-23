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
                <img src ={crowded} onClick={()=> setActive("FirstCard")}/>
                <div>Crowded</div>
                <img src ={crossbite} onClick={()=> setActive("SecondCard")}/>
                <div>Crossbite</div>
                <img src ={spacing} onClick={()=> setActive("ThirdCard")}/>
                <div>spacing</div>
            </nav>
        <div> 
                {active === "FirstCard" && <Card data={Data} cardIndex={0}/>}
                {active === "SecondCard" && <Card data={Data} cardIndex={1}/>}
                {active === "ThirdCard" && <Card data={Data} cardIndex={2}/> }         
            </div>
        </div>
    )
}

export default Quality;