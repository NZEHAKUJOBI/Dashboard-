import './App.css';
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/landingPage/Home';
import ProtectedRoutes from './routes/ProtectedRoutes';
import PublicRoutes from './routes/PublicRoutes';
import NotFound from './pages/NotFound';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {ProtectedRoutes.map((route, index) => ( // Added parentheses
            <Route
              path={route.path}
              element={route.element}
              key={index}
            />
          ))}
          {PublicRoutes.map((route, index) => ( // Added parentheses
            <Route
              path={route.path}
              element={route.element}
              key={index}
            />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;