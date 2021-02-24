import React, {useState} from 'react';
import Card from './card';
import Data from './Data';
import crowded from '../images/funnel3/crowded.png';
import crossbite from '../images/funnel3/crossbite.png';
import spacing from '../images/funnel3/spacing.png';
import bite_issue from '../images/funnel3/bite_issue.png';

// This component is for 1_2 smile funnel
function Quality () {
    const [active, setActive] = useState("");

    return (
        <div>
            <div>
            <img src={"https://assessment.12staging.com/static/media/onetwosmile-logo.26199282.svg"} />
            </div>
            <nav>
                <img src ={crowded} onClick={()=> setActive("Crowded")}/>
                <div>Crowded</div>
                <img src ={crossbite} onClick={()=> setActive("CrossBite")}/>
                <div>Cross-bite</div>
                <img src ={spacing} onClick={()=> setActive("Spaced")}/>
                <div>spaced</div>
                <img src ={bite_issue} onClick={()=> setActive("Bite-issue")}/>
                <div>Bite-issue</div>
                <div onClick={()=> setActive("OtherIssue")}>I have another issue</div>
                {console.log(active)}
            </nav>
        <div> 
                {active === "Crowded" && <Card data={Data} cardIndex={0}/>}
                {active === "CrossBite" && <Card data={Data} cardIndex={1}/>}
                {active === "Spaced" && <Card data={Data} cardIndex={2}/>}
                {active === "Bite-issue" && <Card data={Data} cardIndex={3}/>}
                {active === "OtherIssue" && <Card data={Data} cardIndex={4}/>}
                {console.log(Data)} 
        </div>
        </div>
    )
}

export default Quality;