import React from 'react';
import check from '../images/check2.png';
import trans from '../images/trans.png';
import nice from '../images/NicePng_teeth-png_317146.png'

function Comparison (props) {
    return (
        <div>
            <h2>Why eon Aligner?</h2>
            <div style={{marginBottom: '30px'}} className="paragraph">There are many reasons why you should consider eon Aligner instead of metal, ceramic, incognito or lingual braces.</div>
            {/* the ready picture */}
          {/* <div><img src={"https://eonaligner.com/images/contents/aligners_vs_braces.svg"} /></div>   */}
          {/* manual grid */}
          {/* picture relative and absolute */}
          {/* ---------------------------------- */}
          <div className="line">
              <div></div>
          <div style={{position: 'relative'}}>
          <div>
          <img src={trans} className="img-grid-photo"/>
          <div className="inside-grid">Eon<br/>Aligners</div>
          </div>
          </div>
          <div></div>
          <div style={{position: 'relative'}}>
          <div>
          <img src={nice} className="img-grid-photo"/>
          <div className="inside-grid">Braces</div>
          </div>
          </div>
              <div></div>
          </div>
         {/* --------------------------------------  */}
          <div className="line">
              <div></div>
          <img src={check} className="img-grid"/>
          <p className="text-grid">Treats malocclusion</p>
          <img src={check} className="img-grid"/>
              <div></div>
          </div> 
          <hr
        style={{
            color: '#888', backgroundColor: '#888',height: '0',width:'70%',marginBottom: '20px', marginTop:'0'}}/>

        <div className="line">
              <div></div>
          <img src={check} className="img-grid"/>
          <p className="text-grid">Removable</p>
          <img src={check} className="img-grid"/>
              <div></div>
          </div> 
          <hr
        style={{
            color: '#888', backgroundColor: '#888',height: 0,width:'70%',marginBottom: '20px', marginTop:'0'}}/>

        <div className="line">
              <div></div>
          <img src={check} className="img-grid"/>
          <p className="text-grid">Clear and transparent</p>
          <img src={check} className="img-grid"/>
              <div></div>
          </div> 
          <hr
        style={{
            color: '#888', backgroundColor: '#888',height: 0,width:'70%',marginBottom: '20px', marginTop:'0'}}/>

        <div className="line">
              <div></div>
          <img src={check} className="img-grid"/>
          <p className="text-grid">Gentle on gums and soft tisue</p>
          <img src={check} className="img-grid"/>
              <div></div>
          </div> 
          <hr
        style={{
            color: '#888', backgroundColor: '#888',height: 0,width:'70%',marginBottom: '20px', marginTop:'0'}}/>
        </div>
        
    )
}

export default Comparison;