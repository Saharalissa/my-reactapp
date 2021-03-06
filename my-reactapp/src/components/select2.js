import React from 'react';
import Select from 'react-select';

const cities2 = {
  
    ae: [
      { value: "dubai", label: "Dubai" },
      { value: "abudhabi", label: "Abu Dhabi" },
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
  
}

// const cities= [
// [{ value: "dubai", label: "Dubai" },{ value: "abudhabi", label: "Abu Dhabi" }],
// [{ value: "amman", label: "Amman" }],
// [{ value: "doha", label: "Doha" }],
// [{ value: "kuwait", label: "Kuwait" }],
//  [
//     { value: "riyadh", label: "Riyadh" },
//     { value: "jeddah", label: "Jeddah" },
//     { value: "khobar", label: "Khobar" },
//     { value: "dhahran", label: "Dhahran" },
//     { value: "dammam", label: "Dammam" },
//   ]
// ]

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
                   options=cities2.sa
                  console.log(value)
                  console.log(options)
                   return options
                }
                else if (country === "kw") {
                    options = cities2.kw
                }else if (country === "qa") {
                    options = cities2.qa
                }else if (country === "jo") {
                    options = cities2.jo
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
