import Icon from './components/Icon';
import { iconInfo } from './components/Icon/icons.js';
import WizardStep from "./components/WizardStep";
import { HomeStyle, WizardStyle } from "./styled.js";



export default function Home({ showFaq = true }) {

    

    return (
        <HomeStyle>
            <header>
                <h1>Add New Card</h1>
            </header>

            <section id="card-wizard">
                <WizardStep />
            </section>

            {
                showFaq &&
                <a href="" title="faq" className="faq-link">
                    <Icon sizeByCss icon={iconInfo} />
                </a>
            }
        </HomeStyle>


    );
}