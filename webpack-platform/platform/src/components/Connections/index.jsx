import Card from "../Card";
import Viewer from "./Viewer";
import Editor from "./Editor";
import { iconPerson, iconPlace } from "../Icon/icons.js";




export const connectionType = { person: { name: "person", icon: iconPerson }, place: { name: "place", icon: iconPlace } };


export default function Connections({ connections }) {

    return (<Card title="Connections" Viewer={<Viewer connections={connections} />} Editor={<Editor initialConnections={connections} />} />);

}
