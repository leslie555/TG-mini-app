import { Outlet } from 'react-router-dom';

import { AppTabbar } from './Tabbar';

export const Layout = () => {
  return (
    <>
      <div className="mb-[77px]">
        <Outlet />
      </div>
      <AppTabbar />
    </>
  );
};
