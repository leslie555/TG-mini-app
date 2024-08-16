import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { useBackButton } from '@telegram-apps/sdk-react';

import { AppTabbar } from './Tabbar';

export const Layout = () => {
  const navigate = useNavigate();
  console.log('navigate===', navigate);
  const backButton = useBackButton();
  useEffect(() => {
    backButton.on('click', () => {
      console.log('BackButton clicked.');
      // navigate('/', { replace: true });
    });
  }, []);

  return (
    <>
      <Outlet />
      <AppTabbar />
    </>
  );
};
