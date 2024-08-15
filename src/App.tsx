import { useEffect, useMemo } from 'react';
import { Router } from 'react-router-dom';
import { useIntegration } from '@telegram-apps/react-router-integration';
import {
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  initNavigator,
  useLaunchParams,
  useMiniApp,
  useThemeParams,
  useViewport,
} from '@telegram-apps/sdk-react';
import { AppRoot } from '@telegram-apps/telegram-ui';

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

        <AppRoot
          className="bg-red-100"
          platform={['macos', 'ios'].includes(lp.platform) ? 'ios' : 'base'}
        >
          <Router location={location} navigator={reactNavigator}>
            <AppRoutes />
          </Router>
          <AppTabbar />
        </AppRoot>
  
  );
}

export default App;
