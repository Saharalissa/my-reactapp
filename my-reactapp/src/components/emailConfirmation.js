import React, { useState } from 'react';
import Axios from 'axios';
import queryString from "query-string";
import LocalizedStrings from "react-localization";
import Appointment from './appointment'

const originalPath = window.location.pathname;
var pathElements = originalPath.split("/"); //[0]=> / [1]=> en or ar
const originalLocalePath = pathElements[1];
let language = originalLocalePath;


function Confirmation() { 
    const [exists,setExists] =useState(false)
    const [email,setEmail] =useState("")

    function handleClick(e) {
    e.preventDefault();
    console.log('The button was clicked.');
    Axios.post(` https://assessment.12staging.com/capture/funnel3/validateEmail`, {email})
    .then(res => {
    console.log(res);
    console.log(res.data);
    setExists(res.data.exists);
    if(res.data.exists === true) {
        window.location=`/${language}/appointment${email}`//needs fixing
    }
    console.log(res.data.exists);
    console.log(email);
    }).catch(error => {
    console.log(error);
         })
      }

    let recivedData = queryString.parse(window.location.search);
    console.log(recivedData)
    Axios.post(` https://assessment.12staging.com/capture/funnel3/validateEmail`, recivedData)
    .then(res => {
    console.log(res);
    console.log(res.data);
    setExists(res.data.exists)
    console.log(res.data.exists);
    // let postedEmail=
    // window.location.search ? `${window.location.search}&email=${body.email}`: `?email=${body.email}`;
    // window.location=`/${language}/confirmation${postedEmail}`
    // console.log(postedEmail)
    }).catch(error => {
    console.log(error);
         })
    return(
        <div>
            {exists? <Appointment/> :  
            <div>
            <p>Enter your email to request an appointment</p>
            <input name="Email" placeholder="Email" className="form-control" onChange={e=>{setEmail(e.target.value)}}/>
            <button className="submit-form-button-1" type="submit" onClick={handleClick}>Confirm</button>
        </div>}
        </div>
    )
}

export default Confirmation;


// import React from 'react';
// import Axios from 'axios';
// import queryString from "query-string";
// import LocalizedStrings from "react-localization";
// import { render } from 'react-dom';

// const originalPath = window.location.pathname;
// var pathElements = originalPath.split("/"); //[0]=> / [1]=> en or ar
// const originalLocalePath = pathElements[1];
// let language = originalLocalePath;


// class Confirmation extends React.Component { 
//     constructor(props) {
//         super(props);
//         this.state = {value: ''};
    
//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//       }
//       handleChange(event) {
//         this.setState({value: event.target.value});
//         console.log(event.target.value)
//       }  

//     handleSubmit(event) {
//         //  let recivedData = queryString.parse(window.location.search)
//         alert('A name was submitted: ' + this.state.value);
//         event.preventDefault();
//         let recivedData = this.state.value
//     console.log(recivedData)
//     Axios.post(` https://assessment.12staging.com/capture/funnel3/validateEmail`, recivedData)
//     .then(res => {
//     console.log(res);
//     console.log(res.data);
//     console.log(res.data.exists);
//     // let postedEmail=
//     // window.location.search ? `${window.location.search}&email=${body.email}`: `?email=${body.email}`;
//     // window.location=`/${language}/appointment-request${recivedData}`
//     // console.log(postedEmail)
//     }).catch(error => {
//     console.log(error);
//          })
//     }
//    render(){
//     return(
//         <div>
//             <p>Enter your email to request an appointment</p>
//             <input name="Email" placeholder="Email" className="form-control" onChange={this.handleChange}/>
//             <button className="submit-form-button-1" type="submit" onSubmit={this.handleSubmit} >Confirm</button>
//         </div>
//     )
// }
// }

// export default Confirmation;