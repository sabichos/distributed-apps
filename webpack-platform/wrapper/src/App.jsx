import { useState,useEffect, useMemo } from "react";
import { BrowserRouter } from "react-router-dom";
import Loader from "./components/PageLoader";
import Navbar from "./components/Navbar";
import UserDetails from "./components/UserDetails";
import AccountRouter from "./components/Router";

export default function App() {

    const [user, setUser] = useState();
    const routes = useMemo(() => (user ? Object.entries(user.allowedModules).map(entry => ({ key: entry[0], ...entry[1] })) : []), [user]);


    useEffect(() => {
        fetch("/api/v1/user", {})
            .then(res => res.json())
            .then(res => setUser(res));
    }, []);


    if (!user) return <Loader />

    return (
        <BrowserRouter>
            {
                <section id="wrapper">
                    <Navbar sitemap={user.sitemap} />
                    <AccountRouter routes={routes} />
                    <UserDetails user={user} />
                </section>
            }
        </BrowserRouter>
    );
}