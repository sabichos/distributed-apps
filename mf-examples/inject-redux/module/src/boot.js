import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from "./App";
import store from "./store.js"

const Component = () => {
    return (
        <Provider store={store} >
            <App  />
        </Provider>
    );
};

ReactDOM.render(<Component />, document.getElementById('root'));