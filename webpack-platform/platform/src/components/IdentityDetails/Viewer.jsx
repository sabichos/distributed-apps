import {IdentityViewStyle} from "./styled";

export default function IdentityDetailsViewer({ identityDetails }) {



    return (<IdentityViewStyle>
        {identityDetails.firstName && <div><span className="label">First name:</span> <span className="value">{identityDetails.firstName}</span></div>}
        {identityDetails.lastName && <div><span className="label">Last name:</span> <span className="value">{identityDetails.lastName}</span></div>}
        {identityDetails.phoneNumber && <div><span className="label">Phone Number:</span> <span className="value">{identityDetails.phoneNumber}</span></div>}
    </IdentityViewStyle>);

}