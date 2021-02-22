import React from 'react';
import final from '../images/finalR.webp';
import first from '../images/firstR.webp';
import process from '../images/processR.webp';

function How () {
    return (
    <div>
        {/* web */}
        <div className="text-grid" >
            <h2>How eon Aligner works?</h2>
            <div>Like traditional teeth braces, eon Aligner works by gradually altering the position of your teeth. <br/>
            Each set of invisible aligners is worn for two weeks before progressing onto the next stage.</div>
            <div className="braces-grid-how" >
                <div></div>
                <img src={first} />
                <img src={process} />
                <img src={final} />
                <div></div>
            </div>
            <div className="braces-grid-how">
                <div></div>
                <p>STEP ONE<br/><br/>Each aligner moves your teeth</p>
                <p>STEP TWO<br/><br/>slightly, until the ideal</p>
                <p>STEP THREE<br/><br/>alignment has been achieved</p>
                <div></div>
            </div>
        </div>
        <div className="braces-grid-how-button">
                <div></div>
                  <div><a className="button">TREATMENT PROCESS</a>
                    <a className="button">TREATABLE CASES</a></div>
                <div></div>
            </div>
        {/* mobile */}
            <div className="braces-grid-how-mobile" >
                <img src={first} />
                <p>STEP ONE<br/><br/>Each aligner moves your teeth</p>
                <img src={process} />
                <p>STEP TWO<br/><br/>slightly, until the ideal</p>
                <img src={final} />
                <p>STEP THREE<br/><br/>alignment has been achieved</p>
            </div>
            <div className="braces-grid-how-button-mobile">
                <div></div>
                  <div><a className="button">TREATMENT PROCESS</a>
                    <a className="button">TREATABLE CASES</a></div>
                <div></div>
            </div>
    </div>
    )
}

export default How;