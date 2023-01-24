import React from 'react';
import ReactDOM from 'react-dom/client';

import { LdProvider } from 'providers';

import { App } from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <LdProvider>
      <App />
    </LdProvider>
  </React.StrictMode>
);
