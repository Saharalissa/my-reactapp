//params: language  queryParams: country
import React, {useState, FontAwesomeIcon} from 'react';
import queryString from "query-string";
import Card from './card';
import Data from './Data';
import crowded from '../images/funnel3/crowded.png';
import crossbite from '../images/funnel3/crossbite.png';
import spacing from '../images/funnel3/spacing.png';
import bite_issue from '../images/funnel3/bite_issue.png';
import {Formik, useFormik} from 'formik';
import Select,  { components } from 'react-select';
import CustomSelect from './select';
import CustomSelect2 from './select2';
import CustomSelect3 from './select3';

const countries = [     
      { value: "jo", label: "Jordan" },
      { value: "sa", label: "Saudi Arabia" },
      { value: "kw", label: "Kuwait" },
      { value: "qa", label: "Qatar" }
   ]
    
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
const includes = require("lodash/includes");

// fetchDashboardData(urlCountry.country)
const standardizedCountryCode = (incoming) => {
    if (
      includes(
        ["uae", "ae", "united arabic emirates", "arab emirtaes"],
        incoming.toLowerCase()
      )
    ) {
      return "ae";
    }
 
    if (includes(["sa", "saudi", "saudi arabia"], incoming.toLowerCase())) {
      return "sa";
    }
 
    if (includes(["jo", "jordan"], incoming.toLowerCase())) {
      return "jo";
    }
 
    if (includes(["lb", "lebanon"], incoming.toLowerCase())) {
      return "lb";
    }
 
    if (includes(["iq", "iraq"], incoming.toLowerCase())) {
      return "iq";
    }
 
    if (includes(["qa", "qatar"], incoming.toLowerCase())) {
      return "qa";
    }
 
    if (includes(["kw", "kuwait"], incoming.toLowerCase())) {
      return "kw";
    }
 
    return "n/a";
  };
//   !queryParams.country && delete cities2.sa;

    const countryCodes = [
        { value: "+962", label: "+962", code: "jo" },
        { value: "+966", label: "+966", code: "sa" },
        { value: "+965", label: "+965", code: "kw" },
        { value: "+974", label: "+974", code: "qa" },
      ];
    

// This component is for 1_2 smile funnel
function Quality () {
    const [active, setActive] = useState("");
    const [select, setSelect] = useState("");
    //queryparams ex: "?country=jo" key(country) value(jo)
    let queryParams = queryString.parse(window.location.search);
    console.log(queryParams.country)
    //default values with "?country=country" these will fill the initial values this is when we have queryparams
    let urlCountry = queryParams.country ? queryParams.country : "";
    let standardCountryCode = standardizedCountryCode(urlCountry);

    var selectedCountry = null;

    countries.forEach((element) => {
      if (element.value === standardCountryCode) {
        selectedCountry = element;
        return;
      }
    });

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
            // Country:'',
            Country: selectedCountry ? selectedCountry.value : "",
            // City:'',
            City: selectedCountry ? cities2[selectedCountry.value][0] : "",
            Email:'',
            countryCode: '',
            PhoneNumber:''
        },
        validate,
        onSubmit: values => {
            console.log(JSON.stringify(values, null, 2))
        }
    })
    const country=formik.values.Country

// const countryCodeFromCountry = (country) => {
//     var returnValue = '';
//     countryCodes.forEach((element) => {
//       if (element.code === country) {
//         returnValue = element;
//         console.log(element)
//         return;
//       }
//     });

//     return returnValue;    
//   };

    return (
        <div className="quality-body">
            <div></div>
            <div>
            <div className="logo-grid">
            <img src={"https://assessment.12staging.com/static/media/onetwosmile-logo.26199282.svg"} className="logo"/>
            <div></div>
            </div>
            <h1 className="header_1">Let's see if you qualify for clear aligners!</h1>
            <div className="container-grid">
                <div></div>
                <div>
            {/* section1 web */}
            <div className="section1">
                <div className="circle">1</div>
                <p className="secion1_q">What’s your biggest concern with your smile?</p>
            </div>
            {/* section1 mobile */}
            <div className="section1_mobile">
                <p className="secion1_q">1. What’s your biggest concern with your smile?</p>
            </div>
            <nav className="nav-grid">
                <div className="box custom-active"><img src ={crowded} onClick={()=> setActive("Crowded")} className="quality-img"/>
                <div>Crowded</div></div>
                <div className="box custom-active"><img src ={crossbite} onClick={()=> setActive("CrossBite")} className="quality-img"/>
                <div >Cross-bite</div></div>
                <div className="box custom-active"><img src ={spacing} onClick={()=> setActive("Spaced")} className="quality-img"/>
                <div>spaced</div></div>
                <div className="box custom-active"><img src ={bite_issue} onClick={()=> setActive("Bite-issue")} className="quality-img"/>
                <div>Bite-issue</div></div>
                <div className="box custom-active" onClick={()=> setActive("OtherIssue")}><p style={{margin: '35px auto'}}>I have another issue</p></div>
                {console.log(active)}
            </nav>
        <div> 
                {/* this paragraph will appear when you press any of the active images
                except Bite-issue and other issue */}
                {/* section2 web */}  
                {(active === "Crowded" || active === "CrossBite"|| active === "Spaced" ) && <div className="section1"><div className="circle">2</div><p className="secion1_q">Choose the image that best describes your <b>{active}</b> teeth:</p></div>}        
                {/* section2 mobile */}
                {(active === "Crowded" || active === "CrossBite"|| active === "Spaced" ) && <div className="section1_mobile"><p className="secion1_q">2.Choose the image that best describes your <b>{active}</b> teeth:</p></div>}
                {/* this is to display the related picture for each case */}
                {active === "Crowded" && <Card data={Data} cardIndex={0}/>}
                {active === "CrossBite" && <Card data={Data} cardIndex={1}/>}
                {active === "Spaced" && <Card data={Data} cardIndex={2}/>}
                {active === "Bite-issue" && <div>
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
                        <div><div className="form-row">
                        <CustomSelect
                         className="selectCountry"
                         options={countries}
                         value={formik.values.Country}
                         onChange={value=>{
                         formik.setFieldValue('Country', value.value)
                         formik.setFieldValue('City' ,cities2[value.value][0])
                         formik.setFieldValue('countryCode', formik.values.countryCode) //forEach
                        // formik.setFieldValue('countryCode',countryCodeFromCountry(value.value))
                        //  this is to hide the error message
                         formik.setFieldTouched('Country' ,false )
                        }}
                        
                         />
                        {/* <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Country} name="Country" placeholder="Country" className="form-control"/> */}
                        {formik.touched.Country && formik.errors.Country? <div className="error">{formik.errors.Country}</div>: null}</div></div>
                        <div><div className="form-row">
                        <CustomSelect2 
                        // options={`cities.${formik.values.Country}`}
                        options={cities2[formik.values.Country]}
                        country={formik.values.Country}
                        value={formik.values.City}
                        onChange={value=>formik.setFieldValue('City', formik.values.City)}
                         />
                            {console.log(formik.values.City)}
                         
                        {/* <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.City} name="City" placeholder="City"className="form-control"/> */}
                        {formik.touched.City && formik.errors.City? <div className="error">{formik.errors.City}</div>: null}</div></div> </div>
                        <div className="form_grid">
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Email} name="Email" placeholder="Email" className="form-control"/>
                        {formik.touched.Email && formik.errors.Email? <div className="error">{formik.errors.Email}</div>: null}</div></div>
                        {/* this is for the extention number */}
                        {/* <div className="form-row"><div className="input-container"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.extention} name="extention" placeholder="+962" className="form-control-inside"/><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.PhoneNumber} name="PhoneNumber" placeholder="Phone Number" className="form-control-outside"/></div> */}
                        <div className="form_grid-select"><div className="form-row">
                        <div>
                        <CustomSelect3 
                        //   style={{
                        //     width: "100%",
                        //     marginTop: ".25rem",
                        //     fontSize: "80%",
                        //     color: "#dc3545",
                        //     textAlign: "center"
                        //   }}
                        className="select"
                        options={countryCodes}
                        value={formik.values.countryCode}
                        country={formik.values.Country}
                        onChange={value=>formik.setFieldValue('countryCode',formik.values.countryCode)}
                         />
                            {console.log(formik.values.countryCode.value)}
                         
                        {/* <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.City} name="City" placeholder="City"className="form-control"/> */}
                        {formik.touched.City && formik.errors.City? <div className="error">{formik.errors.City}</div>: null}</div></div>
                        
                        <div className="col-select"><input style={{width:'100%'}} onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.PhoneNumber} name="PhoneNumber" placeholder="Phone Number" className="form-control"/>
                        {formik.touched.PhoneNumber && formik.errors.PhoneNumber? <div className="error">{formik.errors.PhoneNumber}</div>: null}</div></div>
                       </div>
                        <div className="form_grid">
                            <div className= "form-button">
                                <button className="submit-form-button-1" type="submit" onClick={() => {console.log("malocclusionType:","Cross-Bite"); console.log("caseSeverity:","Severe"); console.log("caseType:", "plus" ); }}>Get results</button>
                                <div className="disclaimer_text">We only treat patients age 16 and up.</div>
                            </div>
                            <div></div>
                        </div>
                    </form>
                    </div>}

                {active === "OtherIssue" &&  <div>
                    {/* section3 web */}
                <div className="section3">
                <div className="circle">3</div>
                <p className="secion1_q">Enter your contact details.</p>
                </div>
                 {/* section3 mobile */}
                <div className="section1_mobile">
                    <p className="secion1_q">3. Enter your contact details.</p>
                </div>
                <div className = "textAreaGrid"><div className="circle">2</div><textarea className= "textArea" type="text" rows="6" placeholder="In a few words, tell us about the issue"></textarea></div>
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
                                <button className="submit-form-button-1" type="submit" onClick={() => {console.log("malocclusionType:","OtherIssue"); console.log("caseSeverity:","Severe"); console.log("caseType:", "plus" ); }}>Get results</button>
                                <div className="disclaimer_text">We only treat patients age 16 and up.</div>
                            </div>
                            <div></div>
                        </div>
                    </form>
                    </div>}
                {console.log(Data)} 
        </div>
        </div>
        <div></div>
        </div>
        </div>
        <div></div>
        </div>
    )
}

export default Quality;
{/* <div className="col-md-4 col-4"><div className=" css-2b097c-container"><div className=" css-mlsk89-control"><div className=" css-1hwfws3"><div className=" css-zk88xw-singleValue"><div className="code">{}</div></div><div className="css-1g6gooi"><div style={{display: "inline-block"}}><input/><div></div></div></div></div><div className=" css-1wy0on6"><span  className="css-opgb5h"></span><div className="area-hidden" className=" css-tlfecz-indicatorContainer"><img/></div></div></div><input name="selectCountryCode" type="hidden" value=""/></div></div> */}