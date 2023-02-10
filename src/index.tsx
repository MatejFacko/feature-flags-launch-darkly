import { App } from 'App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ProtectedRoute } from 'routes';

import { LdProvider } from 'providers';
import { Auth0Provider } from 'providers/Auth0Provider';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider>
        <LdProvider>
          <Routes>
            <Route path="*" element={<ProtectedRoute outlet={<App />} />} />
          </Routes>
        </LdProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>
);
