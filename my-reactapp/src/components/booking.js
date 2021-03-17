import React from 'react';
import LocalizedStrings from "react-localization";
var english =require("./translations/en_clinic.json");
var arabic =require("./translations/ar_clinic.json");
var string = new LocalizedStrings({en: english, ar: arabic});


const originalPath = window.location.pathname;
var pathElements = originalPath.split("/"); //[0]=> / [1]=> en or ar
const originalLocalePath = pathElements[1];
let language = originalLocalePath === "ar"? "ar": "en";

var direction = language === "ar" ? "rtl" : "ltr";
string.setLanguage(language);

export default function Booking() {
  return (
   <div>
      <div style={{display:' grid', gridTemplateColumns: '1fr 1fr', margin: '20px 40px'}} >
            <img src={"https://assessment.12staging.com/static/media/onetwosmile-logo.26199282.svg"} style={{width:'5em'}}/>
            <div></div>
      </div>
      <div>{string.ty_header}</div>
      <div>{string.ty_subTitle}</div>
      <input type="submit" value={string.ty_cta_completeCare} style={{backgroundColor:' #3dcdba',
                border: 'none',
                borderRadius: '.5em',
                color: '#fff',
                fontSize: '1em',
                padding: '15px',
                width: '30%',
                margin: '.5em 0',
                cursor: 'pointer',
                fontWeight: '700',
                borderBlock: 'black'}} /><br/>
      <a href={`/${language}`}>{string.ty_cta_homePage}</a>
   </div>
  
  )
}
