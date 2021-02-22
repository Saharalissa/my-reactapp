import React from 'react';
import {Parallax} from 'react-parallax';
import braces from '../images/other-aligners.jpg';


function ScrollBraces () {
    return (
        <div>
        <div className="ladyScroll" style={{position:'relative'}}>
        <Parallax bgImage={ braces } strength={700} className="parallax1"></Parallax>
        <div className="insideParallax1" style={{position:'absolute'}}>What About Other Aligners?</div>
        
        </div>
        <div className="ladyScroll-mobile" style={{position:'relative'}}>
        <img src={ braces } className="parallax1"/>
        <div className="insideParallax2" style={{position:'absolute'}}>What About Other Aligners?</div>
        </div>
        </div>
    )
}
export default ScrollBraces;