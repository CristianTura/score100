import React from 'react';
import { Provider } from 'react-redux';
import {store, persistor}  from './store/store';
import AppRouter from './router/AppRouter';
import { PersistGate } from 'redux-persist/integration/react'

function App() {
  return (
    <Provider store={ store }>
      <PersistGate loading={null} persistor={persistor}>
        <AppRouter />
      </PersistGate>
    </Provider>
  );
}

export default App;
