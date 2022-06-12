import { connectionType } from "./index.jsx";
import Icon from "../Icon";
import { ConnectionsViewStyle } from "./styled";

export default function ConnectionsViewer({ connections }) {



    return (
        <ConnectionsViewStyle>
            <ul>
                {connections.map((connection, index) => (
                    <li key={index}>
                        <div className="icon"><Icon sizeByCss icon={connectionType[connection.type].icon} /></div>
                        <div>{connection.name}</div>
                    </li>
                ))}
            </ul>
        </ConnectionsViewStyle>);

}