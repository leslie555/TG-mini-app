import { useEffect, useMemo } from 'react';
import { Router } from 'react-router-dom';
import { useIntegration } from '@telegram-apps/react-router-integration';
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  initNavigator,
  useBackButton,
  // useLaunchParams,
  useMiniApp,
  usePopup,
  useSettingsButton,
  useThemeParams,
  useUtils,
  useViewport,
} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

import { AppRoutes } from '@/router/AppRoutes';

function App() {
  const utils = useUtils();
  const popup = usePopup();
  const miniApp = useMiniApp();
  const themeParams = useThemeParams();
  const viewport = useViewport();
  const settingsButton = useSettingsButton();
  settingsButton.on('click', () =>
    popup
      .open({
        title: 'Hello!',
        message: 'Here is a test message.',
        buttons: [
          { id: 'share', type: 'default', text: 'Share App' },
          { id: 'cancel', type: 'destructive', text: 'Cancel' },
        ],
      })
      .then((buttonId) => {
        if (buttonId === 'share') {
          utils.shareURL('https://t.me/leslie_57_bot/twa555', 'Fantastic app');
        }
        console.log(
          buttonId === null
            ? 'User did not click any button'
            : `User clicked a button with ID "${buttonId}"`
        );
      })
  );

  useEffect(() => {
    settingsButton.show();
    return () => settingsButton.hide();
  }, [settingsButton]);

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    if (viewport && !viewport.isExpanded) {
      viewport.expand();
    }
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  // Create a new application navigator and attach it to the browser history, so it could modify
  // it and listen to its changes.
  const navigator = useMemo(
    () =>
      initNavigator('app-navigation-state', {
        base: '',
        hashMode: 'slash',
      }),
    []
  );
  const [location, reactNavigator] = useIntegration(navigator);

  const backButton = useBackButton();
  useEffect(() => {
    backButton.on('click', () => {
      console.log('BackButton clicked.');
      // 点击返回键直接返回到主界面
      navigator.goTo(0, true);
    });
  }, [backButton, navigator]);

  // Don't forget to attach the navigator to allow it to control the BackButton state as well
  // as browser history.
  useEffect(() => {
    navigator.attach();
    return () => navigator.detach();
  }, [navigator]);

  useEffect(() => {
    if (location.pathname === '/') {
      backButton.hide();
    } else {
      backButton.show();
    }
    console.log('location===', location);
    console.log('href===', window.location.href);
  }, [location, backButton]);

  return (
    <AppRoot>
      <Router location={location} navigator={reactNavigator}>
        <AppRoutes />
      </Router>
    </AppRoot>
  );
}

export default App;
