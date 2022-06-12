import { useState } from "react";
import { OffersViewStyle } from "./styled.js";

export default function OffersViewer({ initialOffers }) {

    const [offers, setOffers] = useState(initialOffers);

    function optin(offer) {
        fetch("onboarding/api/offers", { method: "post", headers: { "Content-Type": "application/json" }, body: JSON.stringify(offer) })
            .then(() => {
                const ofs = offers.map(o => ({ ...o, optin: o.name === offer.name ? true : !!o.optin }));
                setOffers(ofs);

            })
    }


    return (
        <OffersViewStyle>
            <ul>
                {offers.map((offer, index) => (
                    <li key={index}>
                        <h4>
                            {offer.name}
                            {offer.optin ? <span className="optin side">active</span> : <button type="button" className="btn-link side" onClick={() => optin(offer)}>opt in</button>}
                        </h4>
                        <div>{offer.description}</div>
                        <div className="date">valid until {offer.date}</div>
                    </li>
                ))}
            </ul>
        </OffersViewStyle>);

}