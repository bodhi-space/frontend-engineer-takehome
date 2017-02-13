import { createStore, compose, applyMiddleware} from 'redux';
import Reducers from './reducers';
import Thunk from 'redux-thunk';

let middlewares = [applyMiddleware(Thunk)];

if (process.env.NODE_ENV === 'development') {
    if (window.devToolsExtension) {
        middlewares.push(window.devToolsExtension());
    }
}

function configureStore(initialState) {
	initialState = {};
    return compose(...middlewares)(createStore)(Reducers, initialState);
}

const store = configureStore();

export default store;
