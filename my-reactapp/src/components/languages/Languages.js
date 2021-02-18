import React, {Component} from 'react';
import LocalizedStrings from 'react-localization';

var english =require("../translations/en.json");
var arabic =require("../translations/ar.json");
var string = new LocalizedStrings({en: english, ar: arabic});

//functional component

function Languages (props) {
console.log(props)

var local = props.match.params.language;
let language = local ? local : "en";
var direction = language === "ar" ? "rtl" : "ltr";
string.setLanguage(language);

// function handleLanguageChange(e) {
//     console.log(e.target.value)
//     language = e.target.value;
//     string.setLanguage(language);
//   }

        return(            
             <div>
           {
               (language === "ar")?(
               <button><a  href="/en">English</a></button>
               ) : (
               <button><a  href="/ar">Arabic</a></button>
               )
           }
           <div>{string.header}</div>
         </div>
        )

}

export default Languages;

//////////////////////

//class component  

//   class Languages extends Component {
//     constructor(props) {
//       super(props);
//       this.state = {
//         language: props.match.params.language
//       }
//       console.log(this.state.language)
//       this.handleLanguageChange = this.handleLanguageChange.bind(this);
//     }

//     // This function is for the drop down list
//     handleLanguageChange(e) {
//       e.preventDefault();
//       e.persist();
//       console.log(this.state.language)
//       let lang = e.target.value;
   
//       this.setState(prevState => ({
//         language: lang
//       }))
//       console.log(this.state.language)
     
//       window.location.href=`/${e.target.value}`
//       string.setLanguage(this.state.language);
//     }
  
//     render() {
//       string.setLanguage(this.state.language);
//       return (
//         <div>
//           {
//               (this.state.language === "ar")?(
//               <button><a  href="/en">English</a></button>
//               ) : (
//               <button><a  href="/ar">Arabic</a></button>
//               )
//           }
//           {/* Change Language: <select onChange={this.handleLanguageChange}>
//             <option value="en">English</option>
//             <option value="ar">Arabic</option>
//           </select>
//           <br /><br /> */}
//           {string.header}
//         </div>
//       )
//     }
//   }

// export default Languages;
