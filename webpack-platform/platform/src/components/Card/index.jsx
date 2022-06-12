import { useState } from "react";
import CardStyle from "./styled";


const modes = { viewer: { action: "edit" }, editor: { action: "close" } }

export default function Card({ title, Viewer, Editor }) {

    const [mode, setMode] = useState(modes.viewer);

    return (
        <CardStyle active={mode === modes.editor}>
            <div className="header">
                <h2>{title}</h2>
                {
                    Editor && <button onClick={() => setMode(mode === modes.viewer ? modes.editor : modes.viewer)}>{mode.action}</button>
                }
            </div>

            <div className="body">
            {
                mode === modes.viewer ? Viewer  : Editor 
            }
            </div>

        </CardStyle>
    );

}