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
        <div className="quality-body">
            <div></div>
            <div>
            <div className="logo-grid">
            <img src={"https://assessment.12staging.com/static/media/onetwosmile-logo.26199282.svg"} className="logo"/>
            <div></div>
            </div>
            <h1 className="header_1">Let's see if you qualify for clear aligners!</h1>
            <div className="container-grid">
                <div></div>
                <div>
            {/* section1 web */}
            <div className="section1">
                <div className="circle">1</div>
                <p className="secion1_q">What’s your biggest concern with your smile?</p>
            </div>
            {/* section1 mobile */}
            <div className="section1_mobile">
                <p className="secion1_q">1. What’s your biggest concern with your smile?</p>
            </div>
            <nav className="nav-grid">
                <div className="box custom-active"><img src ={crowded} onClick={()=> setActive("Crowded")} className="quality-img"/>
                <div>Crowded</div></div>
                <div className="box custom-active"><img src ={crossbite} onClick={()=> setActive("CrossBite")} className="quality-img"/>
                <div >Cross-bite</div></div>
                <div className="box custom-active"><img src ={spacing} onClick={()=> setActive("Spaced")} className="quality-img"/>
                <div>spaced</div></div>
                <div className="box custom-active"><img src ={bite_issue} onClick={()=> setActive("Bite-issue")} className="quality-img"/>
                <div>Bite-issue</div></div>
                <div className="box custom-active" onClick={()=> setActive("OtherIssue")}><p style={{margin: '35px auto'}}>I have another issue</p></div>
                {console.log(active)}
            </nav>
        <div> 
                {/* this paragraph will appear when you press any of the active images
                except Bite-issue and other issue */}
                {/* section2 web */}  
                {(active === "Crowded" || active === "CrossBite"|| active === "Spaced" ) && <div className="section1"><div className="circle">2</div><p className="secion1_q">Choose the image that best describes your <b>{active}</b> teeth:</p></div>}        
                {/* section2 mobile */}
                {(active === "Crowded" || active === "CrossBite"|| active === "Spaced" ) && <div className="section1_mobile"><p className="secion1_q">2.Choose the image that best describes your <b>{active}</b> teeth:</p></div>}
                {/* this is to display the related picture for each case */}
                {active === "Crowded" && <Card data={Data} cardIndex={0}/>}
                {active === "CrossBite" && <Card data={Data} cardIndex={1}/>}
                {active === "Spaced" && <Card data={Data} cardIndex={2}/>}
                {active === "Bite-issue" &&  <button onClick={() => {console.log("malocclusionType:","Cross-Bite"); console.log("caseSeverity:","Severe"); console.log("caseType:", "plus" ); }}>Get results</button>}
                {active === "OtherIssue" &&  <div><div className = "textAreaGrid"><div className="circle">2</div><textarea className= "textArea" type="text" rows="6" placeholder="In a few words, tell us about the issue"></textarea></div><br/><button onClick={() => {console.log("malocclusionType:","OtherIssue"); console.log("caseSeverity:","Severe"); console.log("caseType:", "plus" ); }}>Get results</button></div>}
                {console.log(Data)} 
        </div>
        </div>
        <div></div>
        </div>
        </div>
        <div></div>
        </div>
    )
}

export default Quality;