import React from 'react';

type Props = {
  // title: string;
  // icon: string;
  // accountCallback: (account: string | null) => void;
};

export const WalletConnectButton: React.FC<Props> = () => {
  return <w3m-button label="connect wallet(wagmi)" />;
};
