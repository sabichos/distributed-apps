import { useEffect, useState, Suspense, lazy } from "react";
import { useLocation } from "react-router-dom";
import Header from "../Header";
import CardPage from "../CardPage";
import PageLoader from "../PageLoader";

export default function AccountRouter({ routes, children }) {
    const loc = useLocation();
    const [activeRoute, setActiveRoute] = useState({});
    const [Module, setModule] = useState();

    useEffect(() => {
        const loadModule = async () => {
            const module = await lazy(() => import("cards/App"));
            setModule(module);
        };
        loadModule();

    }, []);

    useEffect(() => {
        const route = routes.find(r => r.path === loc?.pathname.slice(1)) || {};
        setActiveRoute(route);
    }, [loc]);


    function renderBody() {
        if (activeRoute.url) {
            return Module && (<Suspense fallback={<PageLoader />}><Module showFaq={false} /></Suspense>);
        }
        return (<CardPage routes={routes} />);
    }



    return (
        <main id="main">
            <Header route={activeRoute} />
            {renderBody()}
            {children}
        </main>
    );
}
