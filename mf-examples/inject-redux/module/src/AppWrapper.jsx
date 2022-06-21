import {reducer} from './store';
import App from "./App";

export default function AppWrapper({ store }){

    useEffect(() => {
        store.injectReducer("module", reducer);
    }, []);

    return <App />;
};
