import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import produtsStore from "./store/produtsStore";

export const Context = createContext(null)




ReactDOM.render(
    <Context.Provider value={{
        produts: new produtsStore(),

    }} >
  <App />
    </Context.Provider>,
  document.getElementById('root')
)
