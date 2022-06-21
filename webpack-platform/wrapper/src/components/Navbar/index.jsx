import { Link } from "react-router-dom";
import Branch from "./Branch";
import "./style.css";

export default function Navbar({ sitemap }) {

    return (
        <nav id="navbar">
            <Link id="logo" to="/" >Guamgam inc.</Link>
            <div id="links">
                {sitemap.map((item) => <Branch key={item.key} item={item} level={0} />)}
            </div>
            <footer>
                <p className="title">
                    <a href="/" target="_blank" rel="noreferrer">Privacy</a>
                    <span className="separator">|</span>
                    <a href="/" target="_blank" rel="noreferrer">Terms</a>
                    <span className="separator">|</span>
                    <a href="/">EULA</a>
                    </p>
            </footer>
        </nav>);


}