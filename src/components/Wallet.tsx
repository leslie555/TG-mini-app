import { useEffect } from 'react';
import { useTonWallet } from '@tonconnect/ui-react';

export const Wallet = () => {
  const wallet = useTonWallet();

  useEffect(() => {
    console.log('Ton wallet===', wallet);
  }, []);

  return (
    wallet && (
      <div className="mt-4 bg-pink-50 p-4">
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
