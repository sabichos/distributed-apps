import { lazy, Suspense } from "react";
import { WizardStepEditorStyle } from "./styled";


export default function WizardStepEditor({ initialConnections }) {

    const SecurePhoneNumber = lazy(() => import("onboarding/PhoneNumber"));


    return (
        <WizardStepEditorStyle>
            <section className="step-body">
                <h2>Contact Details</h2>

                <div className="form-control">
                    <label htmlFor="name">Name</label>
                    <input id="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="nationality">Nationality</label>
                    <input id="nationality" />
                </div>
                <div className="form-control">
                    <label htmlFor="phone">Phone Number</label>
                    <Suspense fallback="">
                        <SecurePhoneNumber />
                    </Suspense>
                </div>

                <h2>Shipping Address</h2>

                <div className="form-control">
                    <label htmlFor="country">Country</label>
                    <input id="country" />
                </div>
                <div className="form-control">
                    <label htmlFor="address">Address</label>
                    <input id="address" />
                </div>
                <div className="form-control">
                    <label htmlFor="city">City</label>
                    <input id="city" />
                </div>
                <div className="form-control">
                    <label htmlFor="zipcode">Zip Code</label>
                    <input id="zipcode" />
                </div>

                <p className="legal">
                    Before you can order your card, you must agree to <a href="/">these Terms and Conditions</a>
                    <br /><br />
                    We strive to keep your information safe. <a href="/">Learn more</a>
                </p>
            </section>

            <footer>
                <button type="button">Submit</button>
            </footer>

        </WizardStepEditorStyle>);

}