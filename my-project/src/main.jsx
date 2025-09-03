import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "react-redux";
import { store } from "./store";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
 <Provider store={store}>
   <BrowserRouter>
      <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        </Route>
        </Routes>
   </BrowserRouter>
  </Provider>
  </StrictMode>
)
