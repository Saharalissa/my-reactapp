import mild from '../images/funnel3/crowding/mild.jpg';
import moderate from '../images/funnel3/crowding/moderate.jpg';
import severe from '../images/funnel3/crowding/severe.jpg';

import mild2 from '../images/funnel3/crossbite/mild.jpg';
import moderate2 from '../images/funnel3/crossbite/moderate.jpg';
import severe2 from '../images/funnel3/crossbite/severe.jpg';

import mild3 from '../images/funnel3/spacing/mild.jpg';
import moderate3 from '../images/funnel3/spacing/moderate.jpg';
import severe3 from '../images/funnel3/spacing/severe.jpg';

export default [
    [{
        title:"Crowded",
        Mild: <img src={mild}/>,
        Moderate: <img src={moderate}/>,
        Severe: <img src={severe}/>
    }],
    [{
        title:"CrossBite",
        Mild: <img src={mild2}/>,
        Moderate: <img src={moderate2}/>,
        Severe: <img src={severe2}/>
    }],
    [{
        title:"Spaced",
        Mild: <img src={mild3}/>,
        Moderate: <img src={moderate3}/>,
        Severe: <img src={severe3}/>
    }],
    [{
        title:"Bite issue",
        malocclusionType: "Bite issue",
        caseSeverity: "Severe",
        caseType: "plus"     
    }],
    [{
        title:"OtherIssue",
        output: <input placeholder="In a few words, tell us about the issue"/>
    }]
];