import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from  './reducers';

import './index.css';
import App from './App';
import registerServiceWorker from './utils/registerServiceWorker';

const StoreInstance = (initialState) => {
    return createStore(
    	rootReducer,
		initialState,
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
}

ReactDOM.render(
	<Provider store={StoreInstance()}>
		<App />
	</Provider>,
	document.getElementById('root')
);
registerServiceWorker();
