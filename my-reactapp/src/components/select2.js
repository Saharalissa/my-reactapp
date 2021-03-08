import React from 'react';
import Select from 'react-select';

import LocalizedStrings from "react-localization";

var english =require("./quality");
var arabic =require("./Data_Arabic");
var strings = new LocalizedStrings({en: english, ar: arabic});

const originalPath = window.location.pathname;
var pathElements = originalPath.split("/");
const originalLocalePath = pathElements[1];
let language = originalLocalePath;
strings.setLanguage(language);


const cities2 = {
    en: {
      ae: [
        { value: "dubai", label: "Dubai" },
        { value: "abudhabi", label: "Abu Dhabi" },
        { value: "ajman", label: "Ajman" },
      ],
      jo: [{ value: "amman", label: "Amman" }],
      qa: [{ value: "doha", label: "Doha" }],
      kw: [{ value: "kuwait", label: "Kuwait" }],
      sa: [
        { value: "riyadh", label: "Riyadh" },
        { value: "jeddah", label: "Jeddah" },
        { value: "khobar", label: "Khobar" },
        { value: "dhahran", label: "Dhahran" },
        { value: "dammam", label: "Dammam" },
      ]


    },
    ar: {
      ae: [
        { value: "dubai", label: "دبي" },
        { value: "abudhabi", label: "ابو ظبي" },
        { value: "ajman", label: "عجمان" },
      ],
      jo: [{ value: "amman", label: "عمان" }],
      qa: [{ value: "doha", label: "الدوحة" }],
      kw: [{ value: "kuwait", label: "الكويت" }],
      sa: [
        { value: "riyadh", label: "الرياض" },
        { value: "jeddah", label: "جدة" },
        { value: "khobar", label: "الخبر" },
        { value: "dhahran", label: "الظهران" },
        { value: "dammam", label: "الدمام" },
      ]
    },
  };

// const cities2 = {
  
//     ae: [
//       { value: "dubai", label: "Dubai" },
//       { value: "abudhabi", label: "Abu Dhabi" },
//     ],
//     jo: [{ value: "amman", label: "Amman" }],
//     qa: [{ value: "doha", label: "Doha" }],
//     kw: [{ value: "kuwait", label: "Kuwait" }],
//     sa: [
//       { value: "riyadh", label: "Riyadh" },
//       { value: "jeddah", label: "Jeddah" },
//       { value: "khobar", label: "Khobar" },
//       { value: "dhahran", label: "Dhahran" },
//       { value: "dammam", label: "Dammam" },
//     ]
  
// }


// const jo = [{ value: "amman", label: "Amman" }]
// const qa = [{ value: "doha", label: "Doha" }]
// const kw = [{ value: "kuwait", label: "Kuwait" }]
// const sa = [
//     { value: "riyadh", label: "Riyadh" },
//     { value: "jeddah", label: "Jeddah" },
//     { value: "khobar", label: "Khobar" },
//     { value: "dhahran", label: "Dhahran" },
//     { value: "dammam", label: "Dammam" },
//   ]

function CustomSelect2({onChange, options, value, country}) {
    
//function for values of select tag
    const defaultValue = (options, value) => {
                if(country === "sa") {
                   options=cities2[language].sa
                  console.log(value)
                  console.log(options)
                   return options
                }
                else if (country === "kw") {
                    options = cities2[language].kw
                }else if (country === "qa") {
                    options = cities2[language].qa
                }else if (country === "jo") {
                    options = cities2[language].jo
                }

                {console.log(value)}
                // return options
                return options? options.find(option=>option.value === value.value): ""
}

    return (
        <div>
            <Select 
             placeholder="City"
             value={defaultValue(options, value)} 
            // value={cities2.country}
             onChange={value=>onChange(value)} 
             options={options}
            />
            {console.log(value)}
            {console.log(country)}
            {/* {console.log(cities[1])}
            {console.log(qa[0].value)} */}
        </div>
    )
}

export default CustomSelect2;
