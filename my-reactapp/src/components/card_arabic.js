import React, {useState} from 'react';
import Form from './form';
import {useFormik} from 'formik';
// THE PURPOSE OF THIS COMPONENT IS ONLY ONLY ONLY TO ADD THE ARABIC SUBMIT BUTTON (احصل على نتائج التقييم)
// This component is for 1_2 smile funnel
function Card ({props, data, cardIndex}) {
    const [status, setStatus] = useState(false);
    const [severity, setSeverity] = useState("");
    // title from Card component = active from Quality component
    const [title, setTitle] = useState("");
    const [type, setType] = useState("");
    const [name, setName] = useState("")

    //Validation
    const validate = values => {
        const errors = {}

        if (!values.Email) {
            errors.Email= 'البريد الإلكتروني مطلوب'
        }else if ( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)) {
            errors.Email = 'أدخل بريد إلكتروني صحيح'
        }

        if (!values.FirstName) {
            errors.FirstName= 'الأسم الأول مطلوب'
        }

        if (!values.LastName) {
            errors.LastName= 'اسم العائلة مطلوب'
        }

        if (!values.Country) {
            errors.Country= 'الحقل مطلوب'
        }

        if (!values.City) {
            errors.City= 'الحقل مطلوب'
        }

        if (!values.PhoneNumber) {
            errors.PhoneNumber= 'رقم الهاتف مطلوب'
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
                <p className="secion1_q">.أدخل تفاصيل الاتصال الخاصة بك</p>
                </div>
                 {/* section3 mobile */}
                <div className="section1_mobile">
                    <p className="secion1_q">3.أدخل تفاصيل الاتصال الخاصة بك.</p>
                </div>
                    <form onSubmit={formik.handleSubmit}>
                        <div className="form_grid">
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.FirstName} name="First Name" placeholder="الاسم الأول" className="form-control" />
                        {formik.touched.FirstName && formik.errors.FirstName? <div className="error">{formik.errors.FirstName}</div>: null}</div></div>
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.LastName} name="Last Name" placeholder="اسم العائلة" className="form-control"/>
                        {formik.touched.LastName && formik.errors.LastName? <div className="error">{formik.errors.LastName}</div>: null}</div></div>
                        </div>
                        <div className="form_grid">
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Country} name="Country" placeholder="الدولة" className="form-control"/>
                        {formik.touched.Country && formik.errors.Country? <div className="error">{formik.errors.Country}</div>: null}</div></div>
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.City} name="City" placeholder="المدينة"className="form-control"/>
                        {formik.touched.City && formik.errors.City? <div className="error">{formik.errors.City}</div>: null}</div></div>
                        </div>
                        <div className="form_grid">
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.Email} name="Email" placeholder="البريد الاكتروني" className="form-control"/>
                        {formik.touched.Email && formik.errors.Email? <div className="error">{formik.errors.Email}</div>: null}</div></div>
                        {/* this is for the extention number */}
                        {/* <div className="form-row"><div className="input-container"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.extention} name="extention" placeholder="+962" className="form-control-inside"/><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.PhoneNumber} name="PhoneNumber" placeholder="Phone Number" className="form-control-outside"/></div> */}
                        <div className="form-row"><div className="col"><input onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.PhoneNumber} name="PhoneNumber" placeholder="1111 111" className="form-control"/>
                        {formik.touched.PhoneNumber && formik.errors.PhoneNumber? <div className="error">{formik.errors.PhoneNumber}</div>: null}</div></div>
                        </div>
                        <div className="form_grid">
                            <div className= "form-button">
                                <button type="submit" className="submit-form-button-1" onClick={() => {console.log("malocclusionType:",title); console.log("caseSeverity:",severity); console.log("caseType:", type ); }}>احصل على نتائج التقييم</button>
                                <div className="disclaimer_text">نعالج فقط من أعمارهم 16 سنة أو أكثر</div>
                            </div>
                            <div></div>
                        </div>
                    </form>
                    </div>}
           </div>
        </div>
    )
}

export default Card;
