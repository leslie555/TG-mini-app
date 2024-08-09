import { useAccount } from 'wagmi';

export function WalletConnectInfoWagmi() {
  const account = useAccount();
  console.log(account);
  return account.chain ? (
    <div className="break-all bg-lime-100 p-4 text-left">
      <div>
        <span className="font-bold"> Address: </span>
        <span>{account.address}</span>
      </div>
      <div>
        <span className="font-bold"> ChainName: </span>
        <span>{account.chain.name}</span>
      </div>
      <div>
        <span className="font-bold"> Chain rpc url: </span>
        <span>{account.chain.rpcUrls.default.http[0]}</span>
      </div>
      <div>
        <span className="font-bold"> ChainId: </span>
        <span>{account?.chainId}</span>
      </div>
    </div>
  ) : null;
}
