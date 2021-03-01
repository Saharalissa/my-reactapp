import React, {useState} from 'react';
import Card from './card';
import Data from './Data_Arabic';
import crowded from '../images/funnel3/crowded.png';
import crossbite from '../images/funnel3/crossbite.png';
import spacing from '../images/funnel3/spacing.png';
import bite_issue from '../images/funnel3/bite_issue.png';

// This component is for 1_2 smile funnel
function Quality_Arabic () {
    const [active, setActive] = useState("");
    

    return (
        <div className="quality-body">
            <div></div>
            <div>
            <div className="logo-grid">
            <img src={"https://assessment.12staging.com/static/media/onetwosmile-logo.26199282.svg"} className="logo"/>
            <div></div>
            </div>
            <h1 className="header_1">تقييم بسيط لمعرفة إن كان التقويم الشفاف مناسب لك</h1>
            <div className="container-grid">
                <div></div>
                <div>
            {/* section1 web */}
            <div className="section1">
                <div className="circle">1</div>
                <p className="secion1_q">ما هو أكبر سبب يثير قلقك من ابتسامتك؟</p>
            </div>
            {/* section1 mobile */}
            <div className="section1_mobile">
                <p className="secion1_q"> ما هو أكبر سبب يثير قلقك من ابتسامتك؟</p>
            </div>
            <nav className="nav-grid">
                <div className="box"><img src ={crowded} onClick={()=> setActive("المزدحمة")} className="quality-img"/>
                <div>أسنان مزدحمة</div></div>
                <div className="box"><img src ={crossbite} onClick={()=> setActive("المعكوسة")} className="quality-img"/>
                <div >عضة معكوسة</div></div>
                <div className="box"><img src ={spacing} onClick={()=> setActive("المتباعدة")} className="quality-img"/>
                <div>أسنان متباعدة</div></div>
                <div className="box"><img src ={bite_issue} onClick={()=> setActive("اطباق الأسنان")} className="quality-img"/>
                <div>اطباق الأسنان</div></div>
                <div className="box" onClick={()=> setActive("لدي مشكلة أخرى")}><p>لدي مشكلة أخرى</p></div>
                {console.log(active)}
            </nav>
        <div> 
                {/* this paragraph will appear when you press any of the active images
                except Bite-issue and other issue */}
                {/* section2 web */}  
                {(active === "المزدحمة" || active === "المتباعدة" ) && <div className="section1"><div className="circle">2</div><p className="secion1_q">اختر أفضل صورة تصف أسنانك  <b>{active}</b></p></div>}
                {(active === "المعكوسة") && <div className="section1"><div className="circle">2</div><p className="secion1_q">اختر أفضل صورة تصف عضتك  <b>{active}</b></p></div>}             
                {/* section2 mobile */}       
                {(active === "المزدحمة" || active === "المتباعدة" ) && <div className="section1_mobile"><p className="secion1_q">2.اختر أفضل صورة تصف أسنانك <b>{active}</b></p></div>}
                {( active === "المعكوسة" ) && <div className="section1_mobile"><p className="secion1_q">2.اختر أفضل صورة تصف عضتك <b>{active}</b></p></div>}
                {/* this is to display the related picture for each case */}
                {active === "المزدحمة" && <Card data={Data} cardIndex={0}/>}
                {active === "المعكوسة" && <Card data={Data} cardIndex={1}/>}
                {active === "المتباعدة" && <Card data={Data} cardIndex={2}/>}
                {active === "اطباق الأسنان" &&  <button onClick={() => {console.log("malocclusionType:","Cross-Bite"); console.log("caseSeverity:","Severe"); console.log("caseType:", "plus" ); }}>Get results</button>}
                {active === "لدي مشكلة أخرى" &&  <div><div className = "textAreaGrid"><div className="circle">2</div><textarea className= "textArea" type="text" rows="6" placeholder="اشرح لنا الحالة في عدة كلمات"></textarea></div><br/><button onClick={() => {console.log("malocclusionType:","OtherIssue"); console.log("caseSeverity:","Severe"); console.log("caseType:", "plus" ); }}>Get results</button></div>}
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

export default Quality_Arabic;