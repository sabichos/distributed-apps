import { Link } from "react-router-dom";


export default function Node({ item, hasChildren, level, selected, onToggle }) {
    return (
        <div className={"node" + (selected ? " selected" : "")} style={{ paddingLeft: `${16 + level * 16}px` }} onClick={() => hasChildren && onToggle()}>
            {
                item.url ? <Link to={item.pathname}>{item.title}</Link> : <span>{item.title}</span>
            }
        </div>
    );
}
