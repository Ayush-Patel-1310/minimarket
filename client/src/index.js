import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Homepage from './Homepage';
import Decider from './Decider';
import Login from './Login';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={< Homepage />}></Route>
    <Route path="/Login" element={< Login />}></Route>
    <Route path="/search" element={< App />}></Route>
    </Routes>
  </BrowserRouter>
  // <React.StrictMode>
  //   <Decider />
  // </React.StrictMode>
);

