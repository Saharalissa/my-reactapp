import React, {useEffect, useState} from 'react';
import LocalizedStrings from "react-localization";
import Select,  { components } from 'react-select';
import {Field, Formik, useFormik} from 'formik';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Pure_jo from '../images/Pure_jo.jpg';
import Axios from "axios";
import queryString from "query-string";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
// const [clinics, setClinics] = useState(string[country]?.city[city].localizedClincsArray)
let recivedData = queryString.parse(window.location.search)
let email = recivedData.email;
const country = props.country
const city = props.city
const clinics = string[country]?.city[city].localizedClincsArray
const [clinic, setClinic] = useState("")
const [time, setTime] = useState("");
// const clinicName = string[country]?.city[city].clincNameOption;
const clinicName = string[country]?.city[city].clincNameOption[0];
// const [clinic_english, setClinicEnglish] = useState('')
const [selectedDate, setSelectedDate] = useState(null)
const [image, setImage] = useState(null)
const not_working_time = string[country]?.city[city][clinicName].notAvailableDay
const x = [0,1,2,3,4,5,6]
const working_time = x.splice(not_working_time,1)
// const modifiedDate = selectedDate.slice(4,14)
console.log(typeof selectedDate);
// const y = [0, 1, 2, 3, 4, 5, 6].includes(working_time[0]);

// console.log(props.country)
// console.log(props.city)
// console.log(country)
// console.log(city)
// console.log(email)
console.log(selectedDate)
console.log(clinicName)
// console.log(clinic_english)
console.log(working_time)
console.log(x)
console.log(not_working_time)
function handleChange(e) {
  setClinic(e.target.value);
  // setClinicEnglish(string[country]?.city[city][clinic])
  console.log(e.target.value)
}

function handleChange2(e) {
  setTime(e.target.value);
  console.log(e.target.value)
}
  console.log(clinic)
  console.log(clinics)
function handleSubmit(e) {
  e.preventDefault();
  console.log('Submit button was clicked.');
  var Data= {
    email: email,
    appointmentTime: selectedDate + time,
    appointmentClinic: clinicName
   }
    
  Axios.post(`https://assessment.12staging.com/capture/funnel3/appointmentRequest`, Data)
  .then(res => {
  console.log(res);
  console.log(res.data);
  if(res.data) {
      window.location=`/${language}/booking`
  } 
  // else {
  //     window.location=`/${language}`   
  // }
  console.log(Data.email);
  }).catch(error => {
  console.log(error);
       })

  console.log(clinic, selectedDate, time);
}

    return(
        <div>
          <div style={{display:' grid', gridTemplateColumns: '1fr 1fr', margin: '20px 40px'}} >
            <img src={"https://assessment.12staging.com/static/media/onetwosmile-logo.26199282.svg"} style={{width:'5em'}}/>
            <div></div>
            </div>
          <div style={{ fontSize:"40px"}}>{string.appointment_header_from_funnel}</div><br/>
          <div style={{ fontSize:"16px"}}>{string.appointment_desc_from_funnel}</div><br/>
          
            <div className="clinic-form-image-grid" style={{
                display: 'grid',
                gridTemplateColumns: '0.5fr 4fr 1fr 0.5fr',
                gridGap: '1em',
                direction: direction
              }}>
                <div></div>
                <div><img
              // src={`${string[country]?.city[city]["Pure Dental Center"].image}`}
              src={`http://d2hfemkvihnw98.cloudfront.net${string[country]?.city[city][clinicName].image}`}
              alt=""
              style={{
                objectFit: "cover",
                height: 361,
                width: "100%",
                objectPosition: "center center"
              }}
            />
            </div>
              <div>
              {/* {country}<br/>{city}<br/> */}
            <form style={{display: 'grid', background: '#ecf0f4', gridGap: '1em', padding: '20px',height: '320px'}} onSubmit={handleSubmit}>
              <label>
                {string.choose_a_clinic}<br/>
                <select value={clinic} placeholder="" onChange={handleChange}>
                  <option>{}</option>
                  {/* <option >{string[country]?.city[city].localizedClincsArray}</option>    */}
                  {/* {countries[language].map((item, index) => ( */} 
                  {string[country]?.city[city].localizedClincsArray.map((item, index) => (
                  <option key = {index} value={item.value}>{item} {string[country]?.city[city][clinicName].address}</option>       
               ))}
                </select><br/>
                <label style = {{textAlign: 'start'}}>
                  {string.choose_the_times_that_suits_you}<br/>
                  <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)}
                   dateFormat = 'E-dd/MM/yy'
                   minDate = {new Date()}
                  // filterDate = {date => date.getDay() != 6 && date.getDay() != 0}
                  filterDate = {clinic? date => date.getDay() != not_working_time[0]: date =>date.getDay() != 0 && date.getDay() != 1 && date.getDay() != 2
                  && date.getDay() != 3 && date.getDay() != 4 && date.getDay() != 5 && date.getDay() != 6}
                  // disabled={clinic == ''}
                  />
                  <br/>
                  <select value={time} placeholder="" onChange={handleChange2} disabled={clinic == ''}>
                  <option>{}</option>
                  {/* <option >{string[country]?.city[city].localizedClincsArray}</option>    */}
                  {/* {countries[language].map((item, index) => ( */} 
                  {string[country]?.city[city][clinicName].working_hours[3].map((item, index) => (
                  <option key = {index} value={item.value}>{item}</option>       
               ))}
               <i className="fa fa-caret-down" aria-hidden="true"></i>
                </select><br/>
                </label><br/>
                </label><br/>
              <input type="submit" value={string.request_an_appointment_button} style={{backgroundColor:' #3dcdba',
                border: 'none',
                borderRadius: '.5em',
                color: '#fff',
                fontSize: '1em',
                padding: '15px',
                width: '100%',
                margin: '.5em 0',
                cursor: 'pointer',
                fontWeight: '700',}} />
            </form>
            {console.log(props.country)}
            {console.log(props.city)}
              </div>
              {console.log(string)}
              {console.log(string[country]?.city[city][clinicName].image)}
              <div></div>
            </div>
            {/* {props.country}<br/>{props.city}<br/> */}     
            {/* {string.ae.clincNameOption} */}
            {/* {string[country]?.clincNameOption} */}
            {/* {string[country]? string[country].clincNameOption:""} */ }
            {/* same meaning as the above */}
            {/* {string[country]?.city[city].clincNameOption} */}

            <div className="clinic-form-image-grid" style={{
                display: 'grid',
                gridTemplateColumns: '0.25fr 2fr 1fr 0.25fr',
                gridGap: '1em',
                direction: direction
              }}>
                <div></div>
                <div>
                  <div style={{textAlign: 'start', fontWeight: 'bold'}}>{string.clinic_include}</div><br/>
                  <div className="clinic-form-image-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: ' 1fr 1fr 1fr',
                  gridGap: '1em',
                  direction: direction
                  }}>
                    <div> <img src={"https://d2hfemkvihnw98.cloudfront.net/home-medal.svg"} style = {{width: '30%'}}/><br/>
                    {string.clinic_include_h1}
                    <p>{string.clinic_include_p1}</p>
                    </div>
                    <div> <img src={"http://d2hfemkvihnw98.cloudfront.net/home-personal.svg"} style = {{width: '30%'}} /><br/>
                    {string.clinic_include_h2_locale[country]}
                    <p>{string.clinic_include_p2_locale[country]}</p>
                    </div>
                    <div> <img src={"http://d2hfemkvihnw98.cloudfront.net/home-heart.svg"} style = {{width: '30%'}}/><br/>
                    {string.clinic_include_h3_locale[country]}
                    <p>{string.clinic_include_p3_locale[country]}</p>
                    </div>
                  </div>
                
                <div></div>
                <div></div></div>
            </div>
        </div>
    )
}
export default Appointment;


