import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';


export default const App = () => {
    const dispatch = useDispatch();
    const card = useSelector(state => state.card);

    return (
        <div >
            <div>Module</div>
            <div>
                <button onClick={() => dispatch({ type: "SET_CARD", payload: {} })}>Set</button>
            </div>
        </div >
    );
};