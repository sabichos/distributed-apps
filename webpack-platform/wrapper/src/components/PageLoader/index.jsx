import loader from "./loader.svg";
import "./style.css";

const PageLoader = () => {
    return (
        <div id="page-loader">
            <img id="loader" src={loader} alt="loading" />
        </div>
    );
};

export default PageLoader;
