import { Outlet } from 'react-router-dom';

import { AppTabbar } from './Tabbar';

export const Layout = () => {
  return (
    <>
      <Outlet />
      <AppTabbar />
    </>
  );
};
