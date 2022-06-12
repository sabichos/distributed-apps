import Card from "../Card";
import Viewer from "./Viewer";


export default function Transactions({ transactions }) {

    return (<Card title="Transactions" Viewer={<Viewer transactions={transactions} />} />);

}
