import React from 'react';
import Select from 'react-select';

const countryCodes = [
    { value: "+962", label: "+962", code: "jo" },
    { value: "+966", label: "+966", code: "sa" },
    { value: "+965", label: "+965", code: "kw" },
    { value: "+974", label: "+974", code: "qa" },
  ];

function CustomSelect3({onChange, options, value, country, className}) {
    
// function for values of select tag
    const defaultValue = (options, value) => {
             if(country === "sa") {
                  value=countryCodes[1].value
                  console.log(value)
                }
                else if (country === "kw") {
                    value=countryCodes[2].value
                    console.log(value)
                }else if (country === "qa") {
                    value=countryCodes[3].value
                    console.log(value)
                }else if (country === "jo") {
                    value=countryCodes[0].value
                    console.log(value)
                }
                {console.log(value)}
                return options? options.find(option=>option.value === value): ""
}


// const countryCodeFromCountry = (country) => {
//     var returnValue = null;
//     countryCodes.forEach((element) => {
//       if (element.code === country) {
//         returnValue = element;
//         console.log(element)
//         return;
//       }
//     });

//     return returnValue;    
//   };
  

const countryCodeOptionLabel = (option) => { 
    // {console.log(option)}
    return (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          columnGap: "0.5em",
          // alignItems: "center",
          // alignContent: "center",
          // alignItems: 'center',
          // display: 'flex',
          // flex:' 1 1 0%',
          // flexWrap: 'wrap',
          // padding: '2px 8px',
          // position: 'relative',
          // overFlow:' hidden',
          // boxSizing: 'border-box',
        }}
      >
        <img
          src={
            "https://1-2smile.com/worldcountries/flags/64x64/" +
            option.code +
            ".png"
          }
          style={{ maxWidth: "fit-content", backgroundColor: "#5c626616", fontSize: "1em" }}
          alt=""
        />
        <span>{option.label}</span>
  
      </div>
    );
  };

    return (
        <div className={className}>
            <Select 
             placeholder=" Code"
             //if we do not set any value, then we can change the code as we like
             //but no value would be set as default
             value={defaultValue(countryCodes, value)} 
            //  value={countryCodeFromCountry(country)}
             onChange={value=>onChange(value)} 
             options={options}
             getOptionLabel={countryCodeOptionLabel}
            />
            {console.log(options)}
            {console.log(value)}
        </div>

    )
}

export default CustomSelect3;
