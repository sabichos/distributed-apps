import Card from "./Card.jsx";
import "./style.css";


export default function CardPage({ routes }) {



    return (
        <section id="card-page">
            {routes.map(route => <Card key={route.key} route={route} />)}
        </section>
    );
}