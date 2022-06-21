import Card from "../Card";
import Viewer from "./Viewer";

export default function Offers({ offers }) {

    return (<Card title="Offers" Viewer={<Viewer initialOffers={offers} />} />);

}