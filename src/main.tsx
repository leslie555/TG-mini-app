import React, { type FC } from 'react';
import ReactDOM from 'react-dom/client';
import { SDKProvider } from '@telegram-apps/sdk-react';
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
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
WebApp.setHeaderColor('#4499ff');
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
      <TonConnectUIProvider
        manifestUrl="https://leslie555.github.io/TG-mini-app/tonconnect-manifest.json"
        uiPreferences={{ theme: THEME.DARK }}
        actionsConfiguration={{
          twaReturnUrl: 'https://leslie555.github.io/TG-mini-app',
        }}
      >
        <SDKProvider acceptCustomStyles debug>
          <App />
        </SDKProvider>
      </TonConnectUIProvider>
    </ErrorBoundary>
  </React.StrictMode>
);
