import React from 'react';
import {Parallax} from 'react-parallax';
import lady from '../images/scroll1.webp';
// const lady = "https://images.pexels.com/photos/34153/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=350";
var sectionStyle={
    width:"100%",
    backgroundImage: `url(${lady})`
};

function ScrollPicture () {
    return (
        <div>
        <div className="ladyScroll" style={{position:'relative'}}>
        <Parallax bgImage={ lady } strength={700} className="parallax1"></Parallax>
        <div className="insideParallax1" style={{position:'absolute'}}>READY TO START?<br/>TAKE THE FIRST STEP TO YOUR PERFECT SMILE</div>
        
        {/* <section style={sectionStyle} strength={500} className="parallax1"><img />
        <div className="insideParallax1">READY TO START?<br/>TAKE THE FIRST STEP TO YOUR PERFECT SMILE</div>
        </section> */}
        </div>
        <div className="ladyScroll-mobile" style={{position:'relative'}}>
        <img src={ lady } className="parallax1"/>
        <div className="insideParallax1" style={{position:'absolute'}}>READY TO START?<br/>TAKE THE FIRST STEP TO YOUR PERFECT SMILE</div>
        </div>
        </div>
    )
}
export default ScrollPicture;