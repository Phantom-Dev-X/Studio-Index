import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Storefront from './pages/Storefront';
import { LandingPage } from './pages/LandingPage';



export default function App() {

  return (
    (
      <BrowserRouter>
        < Routes >
          <Route
            path="/"
            element={
              <LandingPage />
            }
          />

          <Route
            path="/:username"
            element={
              <Storefront />
            }
          />
        </Routes >
      </BrowserRouter >
    )
  );
}