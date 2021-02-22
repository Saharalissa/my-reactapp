import React from 'react';
import ReactPlayer from 'react-player';
import transparent from '../images/transparent.png';
import check from '../images/check.png';
import cover from '../images/cover.png'
import coverMobile from '../images/cover-mobile.jpg'
import Comparison from './comparison';
import How from './how';
import ScrollPicture from './scrollPicture';
import ScrollBraces from './scrollBeaces';
import Testimonials from './testimonials'


 function Home() {
 return (
<div>
    {/* web background */}
    <div className="bg">
        <img src={cover} className="cover"/>
        <div className="inside">EON ALIGNER. THE DIFFERENCE IS CLEAR</div>
    </div>
    {/* mobile background */}
    <div className="bg-mobile">
        <img src={coverMobile} className="cover"/>
        <div className="inside">EON ALIGNER. THE DIFFERENCE IS CLEAR</div>
    </div>
    {/* Web2 */}
    <div className="web1">
    <div style={{justifyContent: 'center', alignItems: 'center'}}>
    <h2>WHAT IS EON ALIGNER?</h2>
    {/* <hr
        style={{
            color: '#888',
            backgroundColor: '#888',
            height: 0,
            width:'10%',
            marginBottom: '20px'
        }}
    /> */}
    <div className="paragraph">eon Aligner is a practically invisible and removable alternative to traditional braces that straightens and aligns teeth.</div>
    <div className="paragraph">Clinically proven to be as effective as regular orthodontic braces, eon Aligner is a more hygienic and comfortable solution than traditional metal brackets.</div>
    </div><br/><br/>
         <div className="braces-grid">
        <div></div>
       <div className="img">
           <img src={transparent} style={{ width: '100%'}}/>
        </div>
        <div className="main-list-grid">
            <div className = "list-grid">
                <div className = "list">
                    <img  src={check} className="check"/>
                </div>
                <p>CLEAR AND INVISIBLE BRACES</p>              
            </div>
            <div className = "list-grid">
                <div></div>
                <div>eon Aligners are made from a medical grade, FDA approved material that is virtually invisible; meaning you can correct your teeth without anyone noticing!
                 </div>   
            </div><br/>
            <div className = "list-grid">
                <div className = "list">
                    <img  src={check} className="check"/>
                </div>
                <p>EASILY REMOVABLE & ESTHETIC</p>          
            </div>
            <div className = "list-grid">
                <div></div>
                <div>Unlike metal or ceramic braces, eon Aligners are removable! 
                    This makes brushing and flossing your teeth an easy task instead of a chore. 
                    Best of all, you can eat whatever you like.
                 </div>   
            </div><br/>
            <div className = "list-grid">
                <div className = "list">
                    <img  src={check} className="check"/>
                </div>
                <p>HIGHLY EFFECTIVE</p>              
            </div>
            <div className = "list-grid">
                <div></div>
                <div>Get your perfect smile with eon Aligner! Clear aligners are scientifically proven to be as effective as braces, veneers and other orthodontic treatments at correcting a wide range of malocclusions.
                 </div>   
            </div><br/>
            <div className = "list-grid">
                <div className = "list">
                    <img  src={check} className="check"/>
                </div>
                <p>STATE-OF-THE-ART TECHNOLOGY</p>              
            </div>
            <div className = "list-grid">
                <div></div>
                <div>Many of us suffer from some form of malocclusion. Most of us choose not to undergo any treatment due to the difficulties associated with metal brackets. After all, who would want to go through all the pain, blood and tears voluntarily. We at eon Aligner believe that correcting crooked teeth does not need to be a complicated process or compromise your lifestyle. We make use of the latest technology and dental research to provide you with the best fitting, most comfortable aligner.
                 </div>   
            </div><br/>
        </div>

        <div></div>
    </div>
    </div>
    {/* Mobile2 */}
    <div className="mobile1">
    <div className="img">
        <div></div>
        <div>
    <h2>WHAT IS EON ALIGNER?</h2>
    <div>eon Aligner is a practically invisible and removable alternative to traditional braces that straightens and aligns teeth.</div>
    <div>Clinically proven to be as effective as regular orthodontic braces, eon Aligner is a more hygienic and comfortable solution than traditional metal brackets.</div>
        </div>
        <div></div>
    </div>   
    <div className="img">
        <div></div>
           <img src={transparent} style={{width: '100%', height: 'auto'}}/>
        <div></div>
    </div>
         <div className="braces-grid">
        <div></div>
    
        <div className="main-list-grid">
            <div className = "list-grid">
                <div className = "list">
                    <img  src={check} className="check"/>
                </div>
                <p>CLEAR AND INVISIBLE BRACES</p>              
            </div>
            <div className = "list-grid">
                <div></div>
                <div>eon Aligners are made from a medical grade, FDA approved material that is virtually invisible; meaning you can correct your teeth without anyone noticing!
                 </div>   
            </div><br/>
            <div className = "list-grid">
                <div className = "list">
                    <img  src={check} className="check"/>
                </div>
                <div><p>EASILY REMOVABLE & ESTHETIC</p>   </div>           
            </div>
            <div className = "list-grid">
                <div></div>
                <div>Unlike metal or ceramic braces, eon Aligners are removable! 
                    This makes brushing and flossing your teeth an easy task instead of a chore. 
                    Best of all, you can eat whatever you like.
                 </div>   
            </div><br/>
            <div className = "list-grid">
                <div className = "list">
                    <img  src={check} className="check"/>
                </div>
                <p>HIGHLY EFFECTIVE</p>              
            </div>
            <div className = "list-grid">
                <div></div>
                <div>Get your perfect smile with eon Aligner! Clear aligners are scientifically proven to be as effective as braces, veneers and other orthodontic treatments at correcting a wide range of malocclusions.
                 </div>   
            </div><br/>
            <div className = "list-grid">
                <div className = "list">
                    <img  src={check} className="check"/>
                </div>
                <p>STATE-OF-THE-ART TECHNOLOGY</p>              
            </div>
            <div className = "list-grid">
                <div></div>
                <div>Many of us suffer from some form of malocclusion. Most of us choose not to undergo any treatment due to the difficulties associated with metal brackets. After all, who would want to go through all the pain, blood and tears voluntarily. We at eon Aligner believe that correcting crooked teeth does not need to be a complicated process or compromise your lifestyle. We make use of the latest technology and dental research to provide you with the best fitting, most comfortable aligner.
                 </div>   
            </div><br/>
        </div>
        <div></div>
    </div>
 </div>
 {/* web & mobile 3 */}
 <div className="video">
     <div></div>
     <ReactPlayer  controls url="https://www.youtube.com/embed/HGTKprKwCRc?rel=0&showinfo=0?&hl=en&cc_lang_pref=en&cc_load_policy=1"/>
    <div></div>
</div>
{/* web & mobile 4 */}
<div><How/></div>
 {/* web & mobile 5 */}
 <div><ScrollPicture/></div>
  {/* web & mobile 6 */}
  <div><Comparison/></div>
   {/* web & mobile 7 */}
  <div><ScrollBraces/></div>
  <div><Testimonials/></div>
</div>
 )
 } 
 
 
 export default Home;