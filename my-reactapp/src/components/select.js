import React from 'react';
import Select from 'react-select';
import LocalizedStrings from "react-localization";
// import {Formik, useFormik} from 'formik';

var english =require("./translations/en.json");
var arabic =require("./translations/ar.json");
var string = new LocalizedStrings({en: english, ar: arabic});

const originalPath = window.location.pathname;
var pathElements = originalPath.split("/"); //[0]=> / [1]=> en or ar
const originalLocalePath = pathElements[1];
let language = originalLocalePath;

var direction = language === "ar" ? "rtl" : "ltr";
string.setLanguage(language);

function CustomSelect({onChange, options, value, className}) {
    
    //function for values of select tag
    const defaultValue = (options, value) => {
        // console.log(value)
    return options? options.find(option=>option.value === value): ""
}
    return (
        <div className={className}>
            <Select 
             placeholder={string.countrySelectHolder}
             value={defaultValue(options, value)} 
             onChange={value=>onChange(value)} 
             options={options}
            />
            {/* {console.log(options)} */}
        </div>
    )
}

export default CustomSelect;
