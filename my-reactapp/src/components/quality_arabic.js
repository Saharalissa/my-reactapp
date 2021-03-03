import React, {useState} from 'react';
import Card_arabic from './card_arabic';
import Data from './Data_Arabic';
import crowded from '../images/funnel3/crowded.png';
import crossbite from '../images/funnel3/crossbite.png';
import spacing from '../images/funnel3/spacing.png';
import bite_issue from '../images/funnel3/bite_issue.png';
import {useFormik} from 'formik';

// This component is for 1_2 smile funnel
function Quality_Arabic () {
    const [active, setActive] = useState("");
    
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
        <div className="quality-body-arabic">
            <div></div>
            <div>
            <div className="logo-grid">
            <img src={"https://assessment.12staging.com/static/media/onetwosmile-logo.26199282.svg"} className="logo"/>
            <div></div>
            </div>
            <h1 className="header_1">تقييم بسيط لمعرفة إن كان التقويم الشفاف مناسب لك</h1>
            <div className="container-grid">
                <div></div>
                <div>
            {/* section1 web */}
            <div className="section1">
                <div className="circle">1</div>
                <p className="secion1_q">ما هو أكبر سبب يثير قلقك من ابتسامتك؟</p>
            </div>
            {/* section1 mobile */}
            <div className="section1_mobile">
                <p className="secion1_q"> ما هو أكبر سبب يثير قلقك من ابتسامتك؟</p>
            </div>
            <nav className="nav-grid">
                <div className="box"><img src ={crowded} onClick={()=> setActive("المزدحمة")} className="quality-img"/>
                <div>أسنان مزدحمة</div></div>
                <div className="box"><img src ={crossbite} onClick={()=> setActive("المعكوسة")} className="quality-img"/>
                <div >عضة معكوسة</div></div>
                <div className="box"><img src ={spacing} onClick={()=> setActive("المتباعدة")} className="quality-img"/>
                <div>أسنان متباعدة</div></div>
                <div className="box"><img src ={bite_issue} onClick={()=> setActive("اطباق الأسنان")} className="quality-img"/>
                <div>اطباق الأسنان</div></div>
                <div className="box" onClick={()=> setActive("لدي مشكلة أخرى")}><p style={{margin: '35px auto'}}>لدي مشكلة أخرى</p></div>
                {console.log(active)}
            </nav>
        <div> 
                {/* this paragraph will appear when you press any of the active images
                except Bite-issue and other issue */}
                {/* section2 web */}  
                {(active === "المزدحمة" || active === "المتباعدة" ) && <div className="section1"><div className="circle">2</div><p className="secion1_q">اختر أفضل صورة تصف أسنانك  <b>{active}</b></p></div>}
                {(active === "المعكوسة") && <div className="section1"><div className="circle">2</div><p className="secion1_q">اختر أفضل صورة تصف عضتك  <b>{active}</b></p></div>}             
                {/* section2 mobile */}       
                {(active === "المزدحمة" || active === "المتباعدة" ) && <div className="section1_mobile"><p className="secion1_q">2.اختر أفضل صورة تصف أسنانك <b>{active}</b></p></div>}
                {( active === "المعكوسة" ) && <div className="section1_mobile"><p className="secion1_q">2.اختر أفضل صورة تصف عضتك <b>{active}</b></p></div>}
                {/* this is to display the related picture for each case */}
                {active === "المزدحمة" && <Card_arabic data={Data} cardIndex={0}/>}
                {active === "المعكوسة" && <Card_arabic data={Data} cardIndex={1}/>}
                {active === "المتباعدة" && <Card_arabic data={Data} cardIndex={2}/>}
                {active === "اطباق الأسنان" && <div>
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
                                <button  type="submit" className="submit-form-button-1" onClick={() => {console.log("malocclusionType:","Cross-Bite"); console.log("caseSeverity:","Severe"); console.log("caseType:", "plus" ); }}>إحصل على نتائج التقييم</button>
                                <div className="disclaimer_text">نعالج فقط من أعمارهم 16 سنة أو أكثر</div>
                            </div>
                            <div></div>
                        </div>
                    </form>
                    </div>}
                
                {active === "لدي مشكلة أخرى" && <div>
                    {/* section3 web */}
                <div className="section3">
                <div className="circle">3</div>
                <p className="secion1_q">.أدخل تفاصيل الاتصال الخاصة بك</p>
                </div>
                 {/* section3 mobile */}
                <div className="section1_mobile">
                    <p className="secion1_q">3.أدخل تفاصيل الاتصال الخاصة بك.</p>
                </div>
                <div className = "textAreaGrid"><div className="circle">2</div><textarea className= "textArea" type="text" rows="6" placeholder="اشرح لنا الحالة في عدة كلمات"></textarea></div>
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
                                <button  type="submit" className="submit-form-button-1" onClick={() => {console.log("malocclusionType:","OtherIssue"); console.log("caseSeverity:","Severe"); console.log("caseType:", "plus" ); }}>إحصل على نتائج التقييم</button>
                                <div className="disclaimer_text">نعالج فقط من أعمارهم 16 سنة أو أكثر</div>
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

export default Quality_Arabic;