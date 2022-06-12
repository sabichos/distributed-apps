import Card from "../Card";
import Viewer from "./Viewer";
import Editor from "./Editor";


export default function IdentityDetails({ identityDetails }) {

    return (<Card title="Identity Details" Viewer={<Viewer identityDetails={identityDetails} />} Editor={<Editor identityDetails={identityDetails} />} />);

}