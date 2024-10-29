
# Conversor de Moedas

Este é um aplicativo de conversão de moedas desenvolvido em **React** com **TypeScript**. Ele permite ao usuário inserir um valor em uma moeda e convertê-lo para outra usando taxas de câmbio fictícias.

## Funcionalidades

- Seleção de moeda de origem e destino.
- Conversão de valor usando taxas de câmbio fictícias.
- Testes unitários para os principais componentes.

## Tecnologias Utilizadas

- **React** com **TypeScript**
- **CSS** puro para estilização
- **Jest** e **React Testing Library** para testes

## Como Executar o Projeto

1. **Clonar o Repositório**:

   Entre no reposítorio do git chamado "prova guarida".

   Clone o Reposítorio do conversor de moeda.

2. **Instalar as Dependências**

   ```bash
   npm install

3. **Iniciar o Servidor**

   ```bash
   npm start

4. **Testar a Aplicação**

   ```bash
   npm test

O aplicativo deverá estar disponível em http://localhost:3000.

## Estrutura do Projeto


- `src/components/`: Contém os componentes principais do aplicativo, os quais são CurrencyConverter, CurrencyInput e CurrencyResult.

- `src/App.tsx`: Ponto de entrada principal do aplicativo.

- `src/data/`: Contém o arquivo Json com as taxas de câmbio.

- `src/App.test.tsx`: Arquivo de testes dos componentes.