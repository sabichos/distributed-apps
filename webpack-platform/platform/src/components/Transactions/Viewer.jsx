import { TransactionsViewStyle } from "./styled";

export default function TransactionsViewer({ transactions }) {



    return (
        <TransactionsViewStyle>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        <div>on {transaction.date}</div>
                        <div>{transaction.amount} USD</div>
                        <div>{transaction.description}</div>
                    </li>
                ))}
            </ul>
        </TransactionsViewStyle>);

}
