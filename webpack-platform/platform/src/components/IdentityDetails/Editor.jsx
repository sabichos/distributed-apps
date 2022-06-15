import { useMemo, useReducer, useState } from "react";
import PhoneNumber from "../PhoneNumber/index.jsx";
import { IdentityEditorStyle } from "./styled.js";


const formReducer = (state, event) => ({ ...state, [event.name]: event.value });



export default function IdentityDetailsEditor({ identityDetails, closeEditor }) {

    const [formValues, setFormValues] = useReducer(formReducer, identityDetails);
    const [phoneValid, setPhoneValid] = useState(!!identityDetails.phoneNumber);


    function handleChange(event) { setFormData({ name: event.target.name, value: event.target.value, }); }
    function submit(event) {
        event.preventDefault();
        fetch("customer/api/customer/identity", { method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify(values) })
            .then(() => closeEditor());
    }


    return (
        <IdentityEditorStyle>
            <form onSubmit={submit}>
                <div className="form-field">
                    <label htmlFor="firstName">First Name</label>
                    <input id="firstName" name="firstName" label="First Name" value={identityDetails.firstName} onInput={handleChange} />
                </div>
                <div className="form-field">
                    <label htmlFor="lastName">Last Name</label>
                    <input id="lastName" name="lastName" label="Last Name" value={identityDetails.lastName} onInput={handleChange} />
                </div>
                <div className="form-field">
                    <label>Phone Number</label>
                    <PhoneNumber name="phoneNumber" label="Phone Number" initialValue={identityDetails.phoneNumber} onChange={handleChange} />
                </div>
                <button className="btn-submit">Save</button>
            </form>
        </IdentityEditorStyle>
    );

}