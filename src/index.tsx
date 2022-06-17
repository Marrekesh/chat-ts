import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import '../src/firebase/firebase'
import 'typeface-lato'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import { setupStore } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const store = setupStore();
root.render(

  <React.StrictMode>
    
      <Router>
        <Provider store={store}>
          <App />
        </Provider>
      </Router>
    

  </React.StrictMode>
);


