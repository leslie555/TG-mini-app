import React from 'react';
import ReactDOM from 'react-dom/client';
import WebApp from '@twa-dev/sdk';
import eruda from 'eruda';

import App from './App.tsx';
// import { createSolanaWalletConnectModal } from './configs/walletConnectSolana';

import './index.css';

eruda.init();
WebApp.ready();
WebApp.enableClosingConfirmation();
// createSolanaWalletConnectModal();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
