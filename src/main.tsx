import React, { type FC } from 'react';
import ReactDOM from 'react-dom/client';
import WebApp from '@twa-dev/sdk';
import eruda from 'eruda';

import App from './App.tsx';
import { ErrorBoundary } from './components/ErrorBoundary';
// import { createSolanaWalletConnectModal } from './configs/walletConnectSolana';
// import { createEthersWalletConnectModal } from './configs/walletConnectEthers';

import '@telegram-apps/telegram-ui/dist/styles.css';
import '@rainbow-me/rainbowkit/styles.css';
import './index.css';

eruda.init();
WebApp.ready();
WebApp.enableClosingConfirmation();
WebApp.disableVerticalSwipes();
// createSolanaWalletConnectModal();
// createEthersWalletConnectModal();

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === 'string'
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
