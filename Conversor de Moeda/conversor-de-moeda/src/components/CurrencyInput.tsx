import React from 'react';
import exchangeRates from '../data/exchangeRates.json';

interface CurrencyInputProps {
  amount: number;
  setAmount: (amount: number) => void;
  fromCurrency: string;
  setFromCurrency: (currency: string) => void;
  toCurrency: string;
  setToCurrency: (currency: string) => void;
}

const CurrencyInput: React.FC<CurrencyInputProps> = ({
  amount,
  setAmount,
  fromCurrency,
  setFromCurrency,
  toCurrency,
  setToCurrency,
}) => {
  const currencies = Object.keys(exchangeRates);

  return (
    <div className="mb-3">
      <div className="input-group mb-3">
        <input
          type="number"
          className="form-control"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          placeholder="Valor"
        />
        <select 
          className="form-select" 
          value={fromCurrency} 
          onChange={(e) => setFromCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Para</span>
        <select 
          className="form-select" 
          value={toCurrency} 
          onChange={(e) => setToCurrency(e.target.value)}
        >
          {currencies.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CurrencyInput;