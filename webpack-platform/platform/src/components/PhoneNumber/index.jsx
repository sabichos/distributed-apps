import { useEffect, useState } from "react";
import Spinner from "../Spinner";
import SecurePhoneNumberStyle from "./styled";
import { iconSuccess } from "../Icon/icons.js";
import Icon from "../Icon";

const stages = { initial: 0, phoneAcquired: 1, codeSent: 2, codeVerified: 3 }

export default function SecurePhoneNumber({ name, label, initialValue, onChange }) {

    const [verificationCode, setVerificationCode] = useState();
    const [countries, setCountries] = useState();
    const [stage, setStage] = useState(initialValue ? stages.codeVerified : stages.initial);

    useEffect(() => {
        fetch("/customer/api/customer/assets/countries")
            .then(res => res.json())
            .then(res => setCountries(res.countries));
    }, []);

    function phoneChanged(event) {
        if (event.target.value !== initialValue)
            setStage(stages.phoneAcquired);
    }

    function sendCode() {
        fetch("/customer/api/phone/verify").then(() => setStage(stages.codeSent));
    }

    function verifyCode() {
        fetch("/customer/api/phone/verify", { method: "post", body: verificationCode }).then(() => {
            setStage(stages.codeVerified);
            onChange && onChange(true);
        });
    }


    if (!countries)
        return <Spinner inverse />

    return (
        <SecurePhoneNumberStyle>
            <div className="row">
                <div className="subrow">
                    <input type="tel" onInput={phoneChanged} />
                    {stage === stages.codeVerified && <Icon className="icon-success" sizeByCss icon={iconSuccess} />}
                </div>
                <button type="button" className="btn-link" onClick={sendCode} disabled={stage !== stages.phoneAcquired}>send verification code</button>
            </div>
            {
                stage === stages.codeSent &&
                <div className="row">
                    <input label="verification code" onInput={setVerificationCode} />
                    <button type="button" className="btn-link" onClick={verifyCode}>verify code</button>
                </div>
            }
        </SecurePhoneNumberStyle>
    );

}