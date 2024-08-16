import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Tabbar } from '@telegram-apps/telegram-ui';
import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat';
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/stats';

import KEFlag from '../assets/KE.svg?react';

const tabs = [
  {
    id: 0,
    Icon: Icon28Devices,
    text: 'Home',
    route: '/',
  },
  {
    id: 1,
    Icon: Icon28Chat,
    text: 'Chat',
    route: '/chat',
  },
  {
    id: 2,
    Icon: Icon28Stats,
    text: 'Stats',
    route: '/stats',
  },
  {
    id: 3,
    Icon: KEFlag,
    text: 'Kenya',
    route: '/kenya',
  },
];

export const AppTabbar = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentTabPath = tabs.find((tab) => tab.id === currentTab)?.route;
    if (currentTabPath !== location.pathname) {
      const tabId = tabs.find((tab) => tab.route === location.pathname)?.id;
      setCurrentTab(tabId ?? 0);
    }
  }, [location, currentTab]);

  return (
    <Tabbar className="bg-green-200">
      {tabs.map(({ id, text, Icon, route }) => (
        <Tabbar.Item
          key={id}
          text={text}
          selected={id === currentTab}
          onClick={() => {
            if (currentTab === id) return;
            setCurrentTab(id);
            navigate(route);
          }}
        >
          <Icon width="28" height="28" />
        </Tabbar.Item>
      ))}
    </Tabbar>
  );
};
