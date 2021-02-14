import React, {Component} from 'react';
import ReactDom from 'react-dom';
import LocalizedStrings from 'react-localization';
import written from '../translations/index';

var english =require("../translations/en.json");
var arabic =require("../translations/ar.json");
var string = new LocalizedStrings({en: english, ar: arabic});

function Languages (props) {
console.log(props)
var local = props.match.params.language;
let language = local ? local : "en";

string.setLanguage(language);

        return(
            <div>{string.header}</div>
        )

}

export default Languages;
