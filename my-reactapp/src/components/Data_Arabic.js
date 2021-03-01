import mild from '../images/funnel3/crowding/mild.jpg';
import moderate from '../images/funnel3/crowding/moderate.jpg';
import severe from '../images/funnel3/crowding/severe.jpg';

import mild2 from '../images/funnel3/crossbite/mild.jpg';
import moderate2 from '../images/funnel3/crossbite/moderate.jpg';
import severe2 from '../images/funnel3/crossbite/severe.jpg';

import mild3 from '../images/funnel3/spacing/mild.jpg';
import moderate3 from '../images/funnel3/spacing/moderate.jpg';
import severe3 from '../images/funnel3/spacing/severe.jpg';

// here we used inline styling because it dis not work with the css file
// style={{margin: 'auto', borderRadius: '5px', width: '200px', height: '100px', objectFit: 'cover'}} 
export default [
    [{
        title:"Crowded",
        Mild: <div><img  src={mild}/><div style={{ background: '#f1f5fc'}}>بسيط</div></div>,
        Moderate: <div><img src={moderate}/><div style={{   background: '#f1f5fc'}}>معتدل</div></div>,
        Severe: <div><img src={severe}/><div style={{   background: '#f1f5fc'}}>متقدم</div></div>
    }],
    [{
        title:"CrossBite",
        Mild: <div><img  src={mild2}/><div style={{   background: '#f1f5fc'}}>بسيط</div></div>,
        Moderate: <div><img src={moderate2}/><div style={{   background: '#f1f5fc'}}>معتدل</div></div>,
        Severe: <div><img src={severe2}/><div style={{   background: '#f1f5fc'}}>متقدم</div></div>
    }],
    [{
        title:"Spaced",
        Mild: <div><img  src={mild3}/><div style={{   background: '#f1f5fc'}}>بسيط</div></div>,
        Moderate: <div><img src={moderate3}/><div style={{   background: '#f1f5fc'}}>معتدل</div></div>,
        Severe: <div><img src={severe3}/><div style={{   background: '#f1f5fc'}}>متقدم</div></div>
    }],
    [{
        title:"Bite issue",
        malocclusionType: "Bite issue",
        caseSeverity: "Severe",
        caseType: "plus"     
    }],
    [{
        title:"OtherIssue",
        output: <textarea type="text" placeholder="In a few words, tell us about the issue"></textarea>
    }]
];