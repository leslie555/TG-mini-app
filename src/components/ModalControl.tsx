import { useTonConnectModal } from '@tonconnect/ui-react';

export const ModalControl = () => {
  const { state, open, close } = useTonConnectModal();

  return (
    <div className="bg-green-50 p-4 mt-4">
      <div>Modal state: {state?.status}</div>
      <button onClick={open}>Open modal</button>
      <button onClick={() => close()}>Close modal</button>
    </div>
  );
};
