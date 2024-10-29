import React from 'react';

interface CurrencyResultProps {
  result: number;
  toCurrency: string;
}

const CurrencyResult: React.FC<CurrencyResultProps> = ({ result, toCurrency }) => {
  return (
    <div className="alert alert-success mt-3" role="alert">
      O resultado da conversão é: {result.toFixed(2)} {toCurrency}
    </div>
  );
};

export default CurrencyResult;