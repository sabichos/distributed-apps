import { combineReducers, createStore, compose } from 'redux';



const staticReducers = {
    shell: (state = initialState, action) => {
        switch (action.type) {
            default:
                return state;
        }
    }
};

export default function configureStore(initialState) {
    const enhancer = compose();
    const store = createStore(createReducer(), enhancer);
    store.asyncReducers = {};
    store.injectReducer = (key, asyncReducer) => {
        store.asyncReducers[key] = asyncReducer;
        store.replaceReducer(createReducer(store.asyncReducers));
    };
    return store;
}

function createReducer(asyncReducers) {
    return combineReducers({
        ...staticReducers,
        ...asyncReducers,
    });
}

export const store = configureStore();