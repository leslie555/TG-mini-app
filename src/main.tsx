import React, { type FC } from 'react';
import ReactDOM from 'react-dom/client';
import  { SDKProvider } from '@telegram-apps/sdk-react';
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
        walletsListConfiguration={{
          includeWallets: [
            {
              appName: 'tonkeeper',
              name: 'Tonkeeper',
              imageUrl: 'https://tonkeeper.com/assets/tonconnect-icon.png',
              tondns: 'tonkeeper.ton',
              aboutUrl: 'https://tonkeeper.com',
              universalLink: 'https://app.tonkeeper.com/ton-connect',
              deepLink: 'tonkeeper-tc://',
              jsBridgeKey: 'tonkeeper',
              bridgeUrl: 'https://bridge.tonapi.io/bridge',
              platforms: ['ios', 'android', 'chrome', 'firefox', 'macos'],
            },
            {
              appName: 'tonwallet',
              name: 'TON Wallet',
              imageUrl: 'https://wallet.ton.org/assets/ui/qr-logo.png',
              aboutUrl:
                'https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd',
              universalLink: 'https://wallet.ton.org/ton-connect',
              jsBridgeKey: 'tonwallet',
              bridgeUrl: 'https://bridge.tonapi.io/bridge',
              platforms: ['chrome', 'android'],
            },
            {
              appName: 'nicegramWallet',
              name: 'Nicegram Wallet',
              imageUrl: 'https://static.nicegram.app/icon.png',
              aboutUrl: 'https://nicegram.app',
              universalLink: 'https://nicegram.app/tc',
              deepLink: 'nicegram-tc://',
              jsBridgeKey: 'nicegramWallet',
              bridgeUrl: 'https://bridge.tonapi.io/bridge',
              platforms: ['ios', 'android'],
            },
            {
              appName: 'binanceTonWeb3Wallet',
              name: 'Binance Web3 Wallet',
              imageUrl:
                'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHZpZXdCb3g9IjAgMCAzMCAzMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjMwIiBoZWlnaHQ9IjMwIiBmaWxsPSIjMEIwRTExIi8+CjxwYXRoIGQ9Ik01IDE1TDcuMjU4MDYgMTIuNzQxOUw5LjUxNjEzIDE1TDcuMjU4MDYgMTcuMjU4MUw1IDE1WiIgZmlsbD0iI0YwQjkwQiIvPgo8cGF0aCBkPSJNOC44NzA5NyAxMS4xMjlMMTUgNUwyMS4xMjkgMTEuMTI5TDE4Ljg3MSAxMy4zODcxTDE1IDkuNTE2MTNMMTEuMTI5IDEzLjM4NzFMOC44NzA5NyAxMS4xMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMi43NDE5IDE1TDE1IDEyLjc0MTlMMTcuMjU4MSAxNUwxNSAxNy4yNTgxTDEyLjc0MTkgMTVaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0xMS4xMjkgMTYuNjEyOUw4Ljg3MDk3IDE4Ljg3MUwxNSAyNUwyMS4xMjkgMTguODcxTDE4Ljg3MSAxNi42MTI5TDE1IDIwLjQ4MzlMMTEuMTI5IDE2LjYxMjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGQ9Ik0yMC40ODM5IDE1TDIyLjc0MTkgMTIuNzQxOUwyNSAxNUwyMi43NDE5IDE3LjI1ODFMMjAuNDgzOSAxNVoiIGZpbGw9IiNGMEI5MEIiLz4KPC9zdmc+Cg==',
              aboutUrl: 'https://www.binance.com/en/web3wallet',
              deepLink: 'bnc://app.binance.com/cedefi/ton-connect',
              bridgeUrl: 'https://bridge.tonapi.io/bridge',
              platforms: ['chrome', 'safari', 'ios', 'android'],
              universalLink: 'https://app.binance.com/cedefi/ton-connect',
            },
            {
              appName: 'fintopio-tg',
              name: 'Fintopio Telegram',
              imageUrl: 'https://fintopio.com/favicons/favicon-196x196.png',
              aboutUrl: 'https://fintopio.com',
              universalLink: 'https://t.me/fintopio?attach=wallet',
              bridgeUrl: 'https://wallet-bridge.fintopio.com/bridge',
              platforms: ['ios', 'android', 'macos', 'windows', 'linux'],
            },
          ],
        }}
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
