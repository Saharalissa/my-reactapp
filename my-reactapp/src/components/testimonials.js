import React from 'react';
import overlay1 from '../images/overlay1.webp';
import overlay2 from '../images/overlay2.webp';
import overlay3 from '../images/overlay3.webp';
import overlay4 from '../images/overlay4.webp';
import overlay5 from '../images/overlay5.webp';
import overlay6 from '../images/overlay6.webp';
import overlay7 from '../images/overlay7.webp';
import overlay8 from '../images/overlay8.webp';

function Testimonials() {
    return(
        <div>
            <div className="portfoilo">
                <div className="container">
                    <img src={overlay1} className="overlay-image"/>
                    <div className="overlay overlayDown">
                        <div className="overlay-text">
                            <h3>Sara E., Sweden</h3>
                            <p>I’m so happy that I used eon Aligner before considering braces. My teeth are now finally aligned and now I can brush and floss without any issues!</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img src={overlay2} className="overlay-image"/>
                    <div className="overlay overlayDown">
                        <div className="overlay-text">
                            <h3>Murat h., Turkey</h3>
                            <p>My treatment time took around 18 months overall and went by in a breeze! Best of all I could eat whatever I wanted in that time without having to worry about food getting stuck anywhere.</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img src={overlay3} className="overlay-image"/>
                    <div className="overlay overlayDown">
                        <div className="overlay-text">
                            <h3>Hassan A., Morocco</h3>
                            <p>I was teased as a child for having a very big chin. My chin wasn't necessarily that big but my 
                            <a href="#" title="Check underbite and other types of malocclusion">underbite</a>I was teased as a child for having a very big chin. My chin wasn't necessarily that big but my 
                            </p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <img src={overlay4} className="overlay-image"/>
                    <div className="overlay overlayDown">
                        <div className="overlay-text">
                            <h3>Diane S., United Kingdom</h3>
                            <p>After my first visit, I was ecstatic to hear that I could fix the gap between my teeth using eon Aligner and didn't have to worry about putting on the metal brackets! The process was pretty straightforward and best of all I could brush my teeth and eat what I wanted during the treatment.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials;