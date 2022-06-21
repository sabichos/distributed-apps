import { useState, useEffect } from 'react';
import Icon from './components/Icon';
import { iconPerson } from './components/Icon/icons.js';
import IdentityDetails from './components/IdentityDetails';
import Transactions from "./components/Transactions";
import Connections from './components/Connections';
import Offers from './components/Offers';
import Spinner from "./components/Spinner";
import { HomeStyle } from "./styled.js";



export default function Home() {

    const [customerDetails, setCustomerDetails] = useState();
    useEffect(() => {
        fetch("customer/api/customer")
            .then(res => res.json())
            .then(res => setCustomerDetails(res));
    }, []);


    return (
        <HomeStyle>
            <header>
                <Icon sizeByCss icon={iconPerson} />
                <h1>Customer Center</h1>
            </header>

            {
                customerDetails ? (
                    <>
                        <section id="centerpiece">
                            <IdentityDetails identityDetails={customerDetails.identity} />
                            <Transactions transactions={customerDetails.transactions} />
                            <Connections connections={customerDetails.connections} />
                        </section>
                        <aside id="side-pane">
                            <span className="logo">Guamgam inc.</span>
                            <p className="description">Guamgam goes out with special campaigns to its customers. These campaigns are tailored to you based on your activity. <br /><br /> You can opt-in or cancel any time with no obligations.</p>
                            <Offers offers={customerDetails.offers} />
                        </aside>
                    </>
                ) : (
                    <span className="loader">loading details, here they come <Spinner inverse /></span>
                )
            }



            <footer>
                <p className="links">
                    <a href="/" target="_blank" rel="noreferrer">Privacy</a>
                    <span className="separator">|</span>
                    <a href="/" target="_blank" rel="noreferrer">Terms</a>
                    <span className="separator">|</span>
                    <a href="/">EULA</a>
                </p>
                <span>All Rights Reserved &copy; Yotam Madar</span>
            </footer>
        </HomeStyle>


    );
}