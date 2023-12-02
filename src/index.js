import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';

import store, { storePersist } from 'redux/store';
import { App } from 'components/App';

import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={storePersist} loading={null}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
