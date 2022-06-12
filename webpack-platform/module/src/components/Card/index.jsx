import { useState } from "react";
import CardStyle from "./styled";


export const modes = { viewer: { action: "edit" }, editor: { action: "close" } }

export default function Card({ title, Viewer, Editor, initialMode }) {

    const [mode, setMode] = useState(initialMode || modes.viewer);

    return (
        <CardStyle active={mode === modes.editor}>
            <div className="header">
                <h2>{title}</h2>
            </div>

            <div className="body">
                {
                    mode === modes.viewer ? Viewer : Editor
                }
            </div>

        </CardStyle>
    );

}