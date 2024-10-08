import { Locales, useTonConnectUI, useTonWallet } from '@tonconnect/ui-react';

export const Settings = () => {
  const [tonConnectUI, setOptions] = useTonConnectUI();
  const wallet = useTonWallet();

  const onLanguageChange = (lang: string) => {
    setOptions({ language: lang as Locales });
  };

  const myTransaction = {
    validUntil: Math.floor(Date.now() / 1000) + 60, // 60 sec
    messages: [
      {
        address: 'EQBBJBB3HagsujBqVfqeDUPJ0kXjgTPLWPFFffuNXNiJL0aA',
        amount: '20000000',
        // stateInit: "base64bocblahblahblah==" // just for instance. Replace with your transaction initState or remove
      },
      {
        address: 'EQDmnxDMhId6v1Ofg_h5KR5coWlFG6e86Ro3pc7Tq4CA0-Jn',
        amount: '60000000',
        // payload: "base64bocblahblahblah==" // just for instance. Replace with your transaction payload or remove
      },
    ],
  };

  return wallet ? (
    <div className="bg-yellow-50 p-4 mt-4">
      <button onClick={() => tonConnectUI.sendTransaction(myTransaction)}>Send transaction</button>

      <div>
        <label>language</label>
        <select onChange={(e) => onLanguageChange(e.target.value)}>
          <option value="en">en</option>
          <option value="ru">ru</option>
        </select>
      </div>
    </div>
  ) : null;
};
