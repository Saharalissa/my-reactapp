import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import queryString from "query-string";
import LocalizedStrings from "react-localization";
import Appointment from './appointment';

var english =require("./translations/en.json");
var arabic =require("./translations/ar.json");
var string = new LocalizedStrings({en: english, ar: arabic});

const originalPath = window.location.pathname;
var pathElements = originalPath.split("/"); //[0]=> / [1]=> en or ar
const originalLocalePath = pathElements[1];
let language = originalLocalePath;

var direction = language === "ar" ? "rtl" : "ltr";
string.setLanguage(language);

// const includes = require("lodash/includes");
// const standardizedCountryCode = (incoming) => {
//     if (
//       includes(
//         ["uae", "ae", "united arab emirates", "arab emirtaes"],
//         incoming.toLowerCase()
//       )
//     ) {
//       return "ae";
//     }
 
//     if (includes(["sa", "saudi", "saudi arabia"], incoming.toLowerCase())) {
//       return "sa";
//     }
 
//     if (includes(["jo", "jordan"], incoming.toLowerCase())) {
//       return "jo";
//     }
 
//     if (includes(["lb", "lebanon"], incoming.toLowerCase())) {
//       return "lb";
//     }
 
//     if (includes(["iq", "iraq"], incoming.toLowerCase())) {
//       return "iq";
//     }
 
//     if (includes(["qa", "qatar"], incoming.toLowerCase())) {
//       return "qa";
//     }
 
//     if (includes(["kw", "kuwait"], incoming.toLowerCase())) {
//       return "kw";
//     }
 
//     return "n/a";
//   };

const standardizedCountryCode = (incoming) => {
    if (incoming === 'United Arab Emirates')
     { return "ae";}
 
    if (incoming === 'Saudi Arabia') {
      return "sa";
    }
 
    if (incoming === 'Jordan') {
      return "jo";
    }
 
    if (incoming === 'Lebanon') {
      return "lb";
    }
 
    if (incoming === 'Iraq') {
      return "iq";
    }
 
    if (incoming === 'Qatar') {
      return "qa";
    }
 
    if (incoming === 'kuwait') {
      return "kw";
    }
 
    return "n/a";
  };
  let standardCountryCode;

function Confirmation() { 
    const [exists,setExists] =useState(false)
    const [email,setEmail] =useState("")
    const [country,setCountry] =useState("")
    const [city,setCity] =useState("")

    //There are two axios functions for the same link, one for the click and one of the page when is
    //loaded to check the queryparams
function handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
    Axios.post(` https://assessment.12staging.com/capture/funnel3/validateEmail`, {email})
    .then(res => {
    console.log(res);
    console.log(res.data);
    setExists(res.data.exists);
    setCountry(res.data.country);
    standardCountryCode= standardizedCountryCode(res.data.country);
    setCity(res.data.city);
    if(res.data.exists === true) {
        window.location=`/${language}/confirmation?email=${email}`//fixed, here I had to use /conformation to get the props country and city
    } else {
        window.location=`/${language}`
        // if (language = 'en'){
        //    window.location=`/en` 
        // }else {
        //    window.location=`/ar` 
        // }   
    }
    console.log(res.data.exists);
    console.log(email);
    }).catch(error => {
    console.log(error);
         })
      }
    
    useEffect(()=>{let recivedData = queryString.parse(window.location.search);
    console.log(recivedData)
    Axios.post(` https://assessment.12staging.com/capture/funnel3/validateEmail`, recivedData)
    .then(res => {
    console.log(res);
    console.log(res.data);
    setExists(res.data.exists)
    console.log(res.data.exists);
    setCountry(res.data.country);
    standardCountryCode= standardizedCountryCode(res.data.country);
    setCity(res.data.city);
    // let postedEmail=
    // window.location.search ? `${window.location.search}&email=${body.email}`: `?email=${body.email}`;
    // window.location=`/${language}/confirmation${postedEmail}`
    // console.log(postedEmail)
    }).catch(error => {
    console.log(error);
         })}, [])
    
    return(
        <div>
            {exists? <Appointment country={standardCountryCode} city={city}/> :  
            <div style={{direction: direction}}>
            <p>{string.email}</p>
            <input name="Email" placeholder={string.holder} className="form-control" onChange={e=>{setEmail(e.target.value)}}/>
            <button className="submit-form-button-1" type="submit" onClick={handleClick}>{string.button}</button>
        </div>}
        </div>
    )
}

export default Confirmation;
