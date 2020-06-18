import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

import Home from './pages/Home/Home';

import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Route path="/" component={Home} exact/>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
