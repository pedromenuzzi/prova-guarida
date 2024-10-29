import React, { useState, useEffect } from 'react';
import CurrencyInput from './CurrencyInput';
import CurrencyResult from './CurrencyResult';
import exchangeRatesData from '../data/exchangeRates.json';

interface ExchangeRates {
  [key: string]: number;
}

const CurrencyConverter: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);
  const [fromCurrency, setFromCurrency] = useState<string>('USD');
  const [toCurrency, setToCurrency] = useState<string>('EUR');
  const [result, setResult] = useState<number | null>(null);

  const exchangeRates: ExchangeRates = exchangeRatesData as ExchangeRates;

  useEffect(() => {
    const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    setResult(amount * rate);
  }, [amount, fromCurrency, toCurrency]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Conversor de Moeda</h1>
      <div className="card p-4 shadow">
        <CurrencyInput
          amount={amount}
          setAmount={setAmount}
          fromCurrency={fromCurrency}
          setFromCurrency={setFromCurrency}
          toCurrency={toCurrency}
          setToCurrency={setToCurrency}
        />
        {result !== null && (
          <CurrencyResult result={result} toCurrency={toCurrency} />
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;