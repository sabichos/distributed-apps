import { Link } from "react-router-dom";
import Icon from "../Icon";
import * as icons from "../Icon/icons.js";

export default function Card({ route }) {


    return (
        <Link className="card" to={route.path}>
            <div className="icon">
               <Icon sizeByCss icon={icons[route.icon]} />
            </div>
            <h4 className="title">{route.title}</h4>
        </Link>);
}