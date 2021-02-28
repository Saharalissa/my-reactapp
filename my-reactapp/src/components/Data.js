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
        Mild: <div><img  src={mild}/><span class="label">Mild</span></div>,
        Moderate: <div><img src={moderate}/><span class="label">Moderate</span></div>,
        Severe: <div><img src={severe}/><span class="label">Severe</span></div>
    }],
    [{
        title:"CrossBite",
        Mild: <div><img  src={mild2}/><span class="label">Mild</span></div>,
        Moderate: <div><img src={moderate2}/><span class="label">Moderate</span></div>,
        Severe: <div><img src={severe2}/><span class="label">Severe</span></div>
    }],
    [{
        title:"Spaced",
        Mild: <div><img  src={mild3}/><span class="label">Mild</span></div>,
        Moderate: <div><img src={moderate3}/><span class="label">Moderate</span></div>,
        Severe: <div><img src={severe3}/><span class="label">Severe</span></div>
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