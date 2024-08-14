import { useState } from 'react';
import { useLaunchParams } from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';
import WebApp from '@twa-dev/sdk';

import {
  AppTabbar,
  InlineButton,
  TonConnect,
  UserAvatar,
  WalletConnectButton,
  WalletConnectInfoWagmi,
} from './components';
import { Web3ModalProvider } from './configs/walletConnectWagmi';

function App() {
  const [count, setCount] = useState(0);
  const lp = useLaunchParams();
  console.log('lp===', lp);
  console.log('VITE_TEST===', import.meta.env.VITE_TEST);
  return (
    <AppRoot
      className="bg-red-100"
      platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
    >
      <h1 className="border-4 border-dashed border-orange-300 flex justify-center font-bold text-3xl p-8 ">
        Mode: {import.meta.env.MODE}
      </h1>
      <Web3ModalProvider>
        <WalletConnectButton />
        <WalletConnectInfoWagmi />
      </Web3ModalProvider>

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
        <TonConnect />
        <UserAvatar />
        <InlineButton />
        <div className="card">
          <button onClick={() => setCount((count) => count + 1)}>count is {count}</button>
        </div>
        <div className="card">
          <button onClick={() => WebApp.showAlert(`Hello World! Current count is ${count}`)}>
            Show Alert
          </button>
        </div>
      </TonConnectUIProvider>

      <AppTabbar />
    </AppRoot>
  );
}

export default App;
