import React, {useEffect, useState} from 'react';
import LocalizedStrings from "react-localization";
import Select,  { components } from 'react-select';
import {Field, Formik, useFormik} from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Pure_jo from '../images/Pure_jo.jpg';

var english =require("./translations/en_clinic.json");
var arabic =require("./translations/ar_clinic.json");
var string = new LocalizedStrings({en: english, ar: arabic});

const originalPath = window.location.pathname;
var pathElements = originalPath.split("/"); //[0]=> / [1]=> en or ar
const originalLocalePath = pathElements[1];
let language = originalLocalePath;

var direction = language === "ar" ? "rtl" : "ltr";
string.setLanguage(language);

const countries = {
  en: [
    { value: "jo", label: "Jordan" },
    { value: "sa", label: "Saudi Arabia" },

    { value: "kw", label: "Kuwait" },
    { value: "qa", label: "Qatar" },
    { value: "others", label: "Other Countries" },

  ],
  ar: [
    { value: "jo", label: "الاردن" },
    { value: "sa", label: "السعودية" },

    { value: "kw", label: "الكويت" },
    { value: "qa", label: "قطر" },
    { value: "others", label: "دول اخرى" },


  ],
};

function Appointment(props) {
// const [country, setCountry] = useState(props.country)
// const [city, setCity] = useState(props.city)
const country = props.country
const city = props.city
// const [clinics, setClinics] = useState(string[country]?.city[city].localizedClincsArray)
const clinics = string[country]?.city[city].localizedClincsArray
const [clinic, setClinic] = useState("")
const [selectedDate, setSelectedDate] = useState(null)
const [image, setImage] = useState(null)

console.log(props.country)
console.log(props.city)
console.log(country)
console.log(city)

function handleChange(e) {
  // setClinics(string[country]?.city[city].localizedClincsArray)
  setClinic(e.target.value);
  console.log(e.target.value)
}
  console.log(clinic)
  console.log(clinics)
function handleSubmit(e) {
  e.preventDefault();
  console.log(clinic, selectedDate);
}

    return(
        <div>
            <div className="clinic-form-image-grid">
                <div></div>
                <div></div>{console.log(string)}
            </div>
            {/* {props.country}<br/>{props.city}<br/> */}
            {country}<br/>{city}<br/>
            <form  onSubmit={handleSubmit}>
              <label>
                {string.choose_a_clinic}<br/>
                <select value={clinic} placeholder="" onChange={handleChange}>
                  <option>{}</option>
                  {/* <option >{string[country]?.city[city].localizedClincsArray}</option>    */}
                  {/* {countries[language].map((item, index) => ( */} 
                  {string[country]?.city[city].localizedClincsArray.map((item, index) => (
                  <option key = {item.index} value={item.value}>{item}</option>       
               ))}
                 
            </select><br/>
                <label>
                  {string.choose_the_times_that_suits_you}<br/>
                  <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
                   dateFormat = 'E-dd/MM/yy'
                   minDate = {new Date()}
                  // filterDate = {date => date.getDay() != 6 && date.getDay() != 0}
                  filterDate = {date => date.getDay() != 5}
                  />
                </label><br/>
                </label><br/>
              <input type="submit" value="Submit" />
            </form>
            {console.log(props.country)}
            {console.log(props.city)}
            {/* {string.ae.clincNameOption} */}
            {/* {string[country]?.clincNameOption} */}
            {/* {string[country]? string[country].clincNameOption:""} */ }
            {/* same meaning as the above */}
            {/* {string[country]?.city[city].clincNameOption} */}
        </div>
    )
}
export default Appointment;



// function Appointment(props) {
// const [country, setCountry] = useState(props.country)
// const [city, setCity] = useState(props.city)
// console.log(props.country)
// console.log(props.city)

// const formik = useFormik({
//     initialValues:{
//         Country:  "",
//         City: "",
//         Email:'',
//         preferedLanguage: language
//     },    
//     validate,
//     onSubmit: values => {
//         console.log(JSON.stringify(values, null, 2))
//     }
// })
//     return(
//         <div>
//             <div className="clinic-form-image-grid">
//                 <div><CustomSelect
//                        language = {language}
//                        options={countries[language]}
//                        value={formik.values.Country}
//                        onChange={value=>{
//                        formik.setFieldValue('Country', value.value)
//                        formik.setFieldValue('City' ,cities2[language][value.value][0])
//                        formik.setFieldValue('countryCode', formik.values.countryCode) //forEach
//                       // formik.setFieldValue('countryCode',countryCodeFromCountry(value.value))
//                       //  this is to hide the error message
//                        formik.setFieldTouched('Country' ,false )
//                       }}
//                 /></div>
//                 <div></div>{console.log(string)}
//             </div>
//             appointment page<br/>
//             {props.country}<br/>
//             {console.log(props.country)}
//             {console.log(props.city)}
//             {props.city}
//         </div>
//     )
// }
// export default Appointment;


