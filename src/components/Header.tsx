import { TonConnectButton } from '@tonconnect/ui-react';

import { Address, ModalControl, Settings, Wallet } from './index';

export const TonConnect = () => {
  return (
    <>
      <header className="mt-8">
        <TonConnectButton className="ml-auto" />
      </header>
      <Address />
      <Wallet />
      <ModalControl />
      <Settings />
    </>
  );
};
