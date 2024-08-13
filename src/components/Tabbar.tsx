import { useState } from 'react';
import { Tabbar } from '@telegram-apps/telegram-ui';
import { Icon28Chat } from '@telegram-apps/telegram-ui/dist/icons/28/chat';
import { Icon28Devices } from '@telegram-apps/telegram-ui/dist/icons/28/devices';
import { Icon28Stats } from '@telegram-apps/telegram-ui/dist/icons/28/stats';

const tabs = [
  {
    id: 0,
    Icon: Icon28Devices,
    text: 'Devices',
  },
  {
    id: 1,
    Icon: Icon28Chat,
    text: 'Chat',
  },
  {
    id: 2,
    Icon: Icon28Stats,
    text: 'Stats',
  },
];

export const AppTabbar = () => {
  const [currentTab, setCurrentTab] = useState(tabs[0].id);

  return (
    <Tabbar className='fixed bottom-0'>
      {tabs.map(({ id, text, Icon }) => (
        <Tabbar.Item
          key={id}
          text={text}
          selected={id === currentTab}
          onClick={() => setCurrentTab(id)}
        >
          <Icon />
        </Tabbar.Item>
      ))}
    </Tabbar>
  );
};
