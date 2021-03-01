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
        Mild: <div style={{ background: '#f1f5fc'}}><img  src={mild}/><div>بسيط</div></div>,
        Moderate: <div style={{ background: '#f1f5fc'}}><img src={moderate}/><div>معتدل</div></div>,
        Severe: <div style={{ background: '#f1f5fc'}}><img src={severe}/><div>متقدم</div></div>
    }],
    [{
        title:"CrossBite",
        Mild: <div style={{ background: '#f1f5fc'}}><img  src={mild2}/><div>بسيط</div></div>,
        Moderate: <div style={{ background: '#f1f5fc'}}><img src={moderate2}/><div>معتدل</div></div>,
        Severe: <div style={{ background: '#f1f5fc'}}><img src={severe2}/><div>متقدم</div></div>
    }],
    [{
        title:"Spaced",
        Mild: <div style={{ background: '#f1f5fc'}}><img  src={mild3}/><div>بسيط</div></div>,
        Moderate: <div style={{ background: '#f1f5fc'}}><img src={moderate3}/><div>معتدل</div></div>,
        Severe: <div style={{ background: '#f1f5fc'}}><img src={severe3}/><div>متقدم</div></div>
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