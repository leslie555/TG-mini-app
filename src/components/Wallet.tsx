import { useTonWallet } from '@tonconnect/ui-react';

export const Wallet = () => {
  const wallet = useTonWallet();
  console.log('Ton wallet===', wallet)

  return (
    wallet && (
      <div className="bg-pink-50 p-4 mt-4">
        <div>
          <span className="font-bold">Connected device platform: </span>
          {wallet.device.platform}
        </div>
        <div>
          <span className="font-bold">Device:</span> {wallet.device.appName}
        </div>
      </div>
    )
  );
};
