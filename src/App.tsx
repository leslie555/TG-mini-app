import { useEffect, useMemo } from 'react';
import { Router } from 'react-router-dom';
import { useIntegration } from '@telegram-apps/react-router-integration';
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  initNavigator,
  SDKProvider,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react';

import { AppTabbar } from '@/components';
import { AppRoutes } from '@/router/appRoutes';

function App() {
  const lp = useLaunchParams();
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  // Create a new application navigator and attach it to the browser history, so it could modify
  // it and listen to its changes.
  const navigator = useMemo(() => initNavigator('app-navigation-state'), []);
  const [location, reactNavigator] = useIntegration(navigator);

  // Don't forget to attach the navigator to allow it to control the BackButton state as well
  // as browser history.
  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);
  console.log('lp===', lp);
  console.log('VITE_TEST===', import.meta.env.VITE_TEST);
  return (
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
        <AppRoot
          className="bg-red-100"
          platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >
          <Router location={location} navigator={reactNavigator}>
            <AppRoutes />
          </Router>
          <AppTabbar />
        </AppRoot>
      </SDKProvider>
    </TonConnectUIProvider>
  );
}

export default App;
