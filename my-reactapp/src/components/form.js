import React from 'react';

function Form () {
    return (
        <div>
            <input name="First Name" placeholder="First Name"/>
            <input name="Last Name" placeholder="Last Name"/>
            <input name="Country" placeholder="Country" />
            <input name="City" placeholder="City"/>
            <input name="Email" placeholder="Email"/>
            <input name="Phone Number" placeholder="Phone Number"/>
            <button>Get results</button>
        </div>
    )
}

export default Form;