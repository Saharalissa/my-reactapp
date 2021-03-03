import React, {useState} from 'react';
import Form from './form';
import {useFormik} from 'formik';
// This component is for 1_2 smile funnel
function Card_arabic ({props, data, cardIndex}) {
    const [status, setStatus] = useState(false);
    const [severity, setSeverity] = useState("");
    // title from Card component = active from Quality component
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("");
//Validation
    const validate = values => {
        const errors = {}

        if (!values.Email) {
            errors.Email= 'Required'
        }else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)) {
            errors.Email = 'Invalid email address'
        }

        if (!values.FirstName) {
            errors.FirstName= 'First Name is required'
        }

        if (!values.LastName) {
            errors.LastName= 'Last Name is required'
        }

        if (!values.Country) {
            errors.Country= 'Country is required'
        }

        if (!values.City) {
            errors.City= 'City is required'
        }

        if (!values.PhoneNumber) {
            errors.PhoneNumber= 'Phone is required'
        }

        return errors;
    }
//Form initial values
    const formik = useFormik({
        initialValues:{
            FirstName:'',
            LastName:'',
            Country:'',
            City:'',
            Email:'',
            PhoneNumber:''
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div>
            {data[cardIndex].map((item, index) => (
            <div className="card" key = {index}>
                {console.log(item.title)}
                <div></div>               
                <div className="severity-card" onClick={() => {setStatus(true); setSeverity("Mild"); setTitle(item.title); setType("standard"); setName("Crowded")}} key = {0}>{item.Mild}</div>
                <div className="severity-card" onClick={() => {setStatus(true); setSeverity("Moderate"); setTitle(item.title); setType("standard"); setName("CrossBite")}}  key = {1}>{item.Moderate}</div>
                <div className="severity-card" onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title); setType("plus"); setName("Spaced")}}  key = {2}>{item.Severe}</div>
                {/* <div  onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title); setType("plus")}}  key = {3}>{item.malocclusionType}</div>
                <div  onClick={() => {setStatus(true); setSeverity("Severe"); setTitle(item.title); setType("plus")}}  key = {4}>{item.output}</div> */}
                {console.log(severity)}
                <div></div>             
           </div>
            ))}

           <div> 
                {/* {status === true && <Form/>} */}
                {/* {status === false && null} */}
                {status === true && <div>
                    {/* section3 web */}
                <div className="section3">
                <div className="circle">3</div>
                <p className="secion1_q">Enter your contact details.</p>
                </div>
                 {/* section3 mobile */}
                <div className="section1_mobile">
                    <p className="secion1_q">3. Enter your contact details.</p>
                </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form_grid">
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.FirstName} name="FirstName" placeholder="First Name" className="form-control" />
                        {formik.touched.FirstName && formik.errors.FirstName? <div className="error">{formik.errors.FirstName}</div>: null}</div></div>
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.LastName} name="LastName" placeholder="Last Name" className="form-control"/>
                        {formik.touched.LastName && formik.errors.LastName? <div className="error">{formik.errors.LastName}</div>: null}</div></div>
                        </div>
                        <div className="form_grid">
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Country} name="Country" placeholder="Country" className="form-control"/>
                        {formik.touched.Country && formik.errors.Country? <div className="error">{formik.errors.Country}</div>: null}</div></div>
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.City} name="City" placeholder="City"className="form-control"/>
                        {formik.touched.City && formik.errors.City? <div className="error">{formik.errors.City}</div>: null}</div></div>
                        </div>
                        <div className="form_grid">
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Email} name="Email" placeholder="Email" className="form-control"/>
                        {formik.touched.Email && formik.errors.Email? <div className="error">{formik.errors.Email}</div>: null}</div></div>
                        {/* this is for the extention number */}
                        {/* <div className="form-row"><div className="input-container"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.extention} name="extention" placeholder="+962" className="form-control-inside"/><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.PhoneNumber} name="PhoneNumber" placeholder="Phone Number" className="form-control-outside"/></div> */}
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.PhoneNumber} name="PhoneNumber" placeholder="Phone Number" className="form-control"/>
                        {formik.touched.PhoneNumber && formik.errors.PhoneNumber? <div className="error">{formik.errors.PhoneNumber}</div>: null}</div></div>
                        </div>
                        <div className="form_grid">
                            <div className= "form-button">
                                <button type="submit" className="submit-form-button-1" onClick={() => {console.log("malocclusionType:",title); console.log("caseSeverity:",severity); console.log("caseType:", type ); }}>Get Results</button>
                                <div className="disclaimer_text">We only treat patients age 16 and up.</div>
                            </div>
                            <div></div>
                        </div>
                    </form>
                    </div>}
           </div>
        </div>
    )
}

export default Card_arabic;
