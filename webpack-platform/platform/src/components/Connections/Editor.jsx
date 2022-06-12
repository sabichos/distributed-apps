import { useState } from "react";
import { connectionType } from "./index.jsx";
import { iconTrash } from "../Icon/icons.js";
import Icon from "../Icon";
import { ConnectionsEditorStyle } from "./styled";

export default function ConnectionsEditor({ initialConnections }) {
    const [connections, setConnections] = useState(initialConnections);

    function removeConnection(connection) {
        fetch("onboarding/api/customer/connection", { method: "post", headers: { "Content-Type": "application/json" }, body: connection })
            .then(() => {
                const newConnections = connections.filter(c => c.name !== connection.name);
                setConnections(newConnections);
            });
    }

    return (
        <ConnectionsEditorStyle>
            <ul>
                {connections.map((connection, index) => (
                    <li key={index}>
                        <div className="icon"><Icon sizeByCss icon={connectionType[connection.type].icon} /></div>
                        <div>{connection.name}</div>
                        <button type="button" className="btn-remove" onClick={() => removeConnection(connection)}><Icon sizeByCss icon={iconTrash} /></button>
                    </li>
                ))}
            </ul>
        </ConnectionsEditorStyle>);

}