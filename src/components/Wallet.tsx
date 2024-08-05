import { useTonWallet } from '@tonconnect/ui-react';

export const Wallet = () => {
  const wallet = useTonWallet();

  return (
    wallet && (
      <div className="bg-pink-50 p-4 mt-4">
        <div>
          <span className="font-bold">Connected wallet: </span>
          {wallet.name}
        </div>
        <div>
          <span className="font-bold">Device:</span> {wallet.device.appName}
        </div>
      </div>
    )
  );
};
