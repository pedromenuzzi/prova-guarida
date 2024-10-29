import { render, fireEvent } from '@testing-library/react';
import CurrencyInput from './components/CurrencyInput';

const setupCurrencyInput = () => {
  const setAmount = jest.fn();
  const setFromCurrency = jest.fn();
  const setToCurrency = jest.fn();

  const utils = render(
    <CurrencyInput
      amount={0}
      setAmount={setAmount}
      fromCurrency="USD"
      setFromCurrency={setFromCurrency}
      toCurrency="EUR"
      setToCurrency={setToCurrency}
    />
  );

  const input = utils.getByPlaceholderText('Valor') as HTMLInputElement;
  const fromSelect = utils.getByDisplayValue('USD') as HTMLSelectElement;
  const toSelect = utils.getByDisplayValue('EUR') as HTMLSelectElement;

  return {
    input,
    fromSelect,
    toSelect,
    setAmount,
    setFromCurrency,
    setToCurrency,
    ...utils,
  };
};

test('permite entrada de valor', () => {
  const { input, setAmount } = setupCurrencyInput();
  fireEvent.change(input, { target: { value: '123' } });
  expect(setAmount).toHaveBeenCalledWith(123); // Conversão para número
});

test('permite selecionar moeda de origem', () => {
  const { fromSelect, setFromCurrency } = setupCurrencyInput();
  fireEvent.change(fromSelect, { target: { value: 'BRL' } });
  expect(setFromCurrency).toHaveBeenCalledWith('BRL');
});

test('permite selecionar moeda de destino', () => {
  const { toSelect, setToCurrency } = setupCurrencyInput();
  fireEvent.change(toSelect, { target: { value: 'JPY' } });
  expect(setToCurrency).toHaveBeenCalledWith('JPY');
});