import React, { createContext } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import HouseStore from './store/HouseStore';
import UserStore from './store/UserStore';
import OrderStore from './store/OrderStore';


export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Context.Provider value={{
    user: new UserStore(),
    house: new HouseStore(),
    order: new OrderStore()
  }}>
        <App />
  </Context.Provider>,
  <React.StrictMode>
  </React.StrictMode>
);
