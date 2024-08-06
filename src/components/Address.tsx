import { useTonAddress } from '@tonconnect/ui-react';

export const Address = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  return (
    rawAddress && (
      <div className="bg-cyan-50 p-4 text-left break-all">
        <div>
          <span className="font-bold">User-friendly address: </span>
          {userFriendlyAddress}
        </div>
        <div>
          <span className="font-bold">Raw address:</span> {rawAddress}
        </div>
      </div>
    )
  );
};
