import { useSelector, useDispatch } from 'react-redux';


export default function App() {
    const dispatch = useDispatch();
    const card = useSelector(state => state.card);

    return (
        <div >
            <h1>Your {card.type} Details</h1>
            <div>
                <button onClick={() => dispatch({ type: "SET_CARD", payload: {} })}>Set</button>
            </div>
        </div >
    );
};