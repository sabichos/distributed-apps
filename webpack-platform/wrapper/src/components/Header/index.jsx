import { Link } from "react-router-dom";
import Icon from "../Icon";
import { iconBack } from "../Icon/icons.js";
import "./style.css";

export default function Header({ route }) {


    return (
        <div id="page-header">
            <div className="page-title">
                <Link className="icon" to="..">
                    {route.icon && <Icon sizeByCss icon={iconBack} />}
                </Link>
                <h2 className="title">{route.title}</h2>
            </div>
            {
                route.path && <div className="header-breadcrumbs">{route.path.replace(/\//g, " > ")}</div>
            }
        </div>
    );
}