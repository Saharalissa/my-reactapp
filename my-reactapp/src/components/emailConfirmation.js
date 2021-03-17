import React, {useEffect, useState} from 'react';
import Axios from 'axios';
import queryString from "query-string";
import LocalizedStrings from "react-localization";
import Appointment from './appointment';

var english =require("./translations/en.json");
var arabic =require("./translations/ar.json");
var string = new LocalizedStrings({en: english, ar: arabic});


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

    const originalPath = window.location.pathname;
    var pathElements = originalPath.split("/"); //[0]=> / [1]=> en or ar
    const originalLocalePath = pathElements[1];
    let language = originalLocalePath;

    var direction = language === "ar" ? "rtl" : "ltr";
    string.setLanguage(language);

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
    // if(res.data.exists === true) {
    //     window.location=`/${language}/confirmation?email=${email}`//fixed, here I had to use /conformation to get the props country and city
    // } else {
    //     window.location=`/${language}`
    // }
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
