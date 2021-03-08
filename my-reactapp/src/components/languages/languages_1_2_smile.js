import React, {Component} from 'react';
import LocalizedStrings from 'react-localization';

import Quality from '../quality';
import Quality_Arabic from '../quality_arabic';
// var english =require("../Data");
// var arabic =require("../Data_Arabic");
var english =require("../quality");
var arabic =require("../quality_arabic");
var string = new LocalizedStrings({en: english, ar: arabic});

//functional component

function Languages_smile (props) {
console.log(props)

var local = props.match.params.language;
let language = local ? local : "en";
var direction = language === "ar" ? "rtl" : "ltr";
string.setLanguage(language);

        return(            
             <div>
             {
               (language === "ar")?(
               <button><a  href="/en">English</a></button>
               ) : (
               <button><a  href="/ar">Arabic</a></button>
               )
            }

           <div>{
               (language === "en")?(
               <Quality/>
               ) : (
               <Quality_Arabic/>
               )
           }</div>

        </div>
         ) }



export default Languages_smile;

// {
//     (language === "quality_arabic")?(
//     <button><a  href="/quality/quality">English</a></button>
//     ) : (
//     <button><a  href="/quality/quality_arabic">Arabic</a></button>
//     )
// }