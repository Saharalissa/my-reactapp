import React, {Component} from 'react';
import LocalizedStrings from 'react-localization';

import Quality from '../quality';
import Quality_Arabic from '../quality_arabic';
var english =require("../Data");
var arabic =require("../Data_Arabic");
var string = new LocalizedStrings({en: english, ar: arabic});

//functional component

function Languages_smile (props) {
console.log(props)

var local = props.match.params.language;
let language = local ? local : "quality";
var direction = language === "quality_arabic" ? "rtl" : "ltr";
string.setLanguage(language);

        return(            
             <div>
             {
               (language === "quality_arabic")?(
               <button><a  href="/quality">English</a></button>
               ) : (
               <button><a  href="/quality_arabic">Arabic</a></button>
               )
           }

           <div>{
               (language === "quality")?(
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