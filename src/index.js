import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Layout from "./pages/layout";
import Home from './pages/home';
import Login from './pages/login';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/"  element={<Layout />}/>
          <Route index  element={<Home />}/>
          <Route path="login"  element={<Login />}/>
      </Routes>
    </BrowserRouter>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);