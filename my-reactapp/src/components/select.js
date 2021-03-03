import React from 'react';
import Select from 'react-select';
// import {Formik, useFormik} from 'formik';
function CustomSelect({onChange, options, value, className}) {
    
    //function for values of select tag
    const defaultValue = (options, value) => {
        // console.log(value)
    return options? options.find(option=>option.value === value): ""
}
    return (
        <div className={className}>
            <Select 
             placeholder="Country"
             value={defaultValue(options, value)} 
             onChange={value=>onChange(value)} 
             options={options}
            />
            {/* {console.log(options)} */}
        </div>
    )
}

export default CustomSelect;
