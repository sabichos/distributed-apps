import Card, { modes } from "../Card";
import Viewer from "./Viewer";
import Editor from "./Editor";



export default function WizardStep({ connections }) {

    return (<Card title="Card Details" initialMode={modes.editor} Viewer={<Viewer />} Editor={<Editor />} />);

}
