import { combineReducers, createStore, compose } from 'redux';



export const reducer = (state = {}, action) => {
    switch (action.type) {
        case SET_CARD: {
            return { ...state, card: action.payload, };
        }
    }
    return state;
};

const store = createStore(reducer);
export default store;