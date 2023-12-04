import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import { App } from 'components/App';
import store, { storePersist } from 'redux/store';

import './index.scss';

const basename = '/goit-react-hw-08-phonebook';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={storePersist} loading={null}>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
