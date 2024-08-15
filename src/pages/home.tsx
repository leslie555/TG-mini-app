import { useState } from 'react';
import WebApp from '@twa-dev/sdk';

import {
  InlineButton,
  TonConnect,
  UserAvatar,
  WalletConnectButton,
  WalletConnectInfoWagmi,
} from '@/components';
import { Web3ModalProvider } from '@/configs/walletConnectWagmi';

export const Home = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1 className="flex justify-center border-4 border-dashed border-orange-300 p-8 text-3xl font-bold">
        Mode: {import.meta.env.MODE}
      </h1>
      <Web3ModalProvider>
        <WalletConnectButton />
        <WalletConnectInfoWagmi />
      </Web3ModalProvider>
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
    </div>
  );
};
