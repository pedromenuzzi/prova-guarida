# Aplicativo de Lista de Contatos

Este é um aplicativo de lista de contatos desenvolvido em **React** com **TypeScript**. Ele permite ao usuário adicionar, editar e remover contatos, além de salvar os dados no armazenamento local.

## Funcionalidades

- Adicionar novo contato com nome e número de telefone.
- Editar informações de um contato existente.
- Remover um contato.
- Armazenamento dos dados usando Local Storage.

## Tecnologias Utilizadas

- **React** com **TypeScript**
- **CSS** e **Bootstrap**  para estilização
- **Local Storage** para persistência de dados

## Como Executar o Projeto

1. **Clonar o Repositório**:

   Entre no reposítorio do git chamado "prova guarida".

   Clone o Reposítorio da lista de contatos.

2. **Instalar as Dependências**

   ```bash
   npm install

3. **Iniciar o Servidor**

   ```bash
   npm start

O aplicativo deverá estar disponível em http://localhost:3000.

## Estrutura do Projeto


- `src/components/`: Contém os componentes principais do aplicativo, os quais são ContactForm e ContactList.

- `src/hooks/`: Funções para manipulação de dados no Local Storage.

- `src/types/`: Onde temos o tipo Contato.

- `src/App.tsx`: Ponto de entrada principal do aplicativo.
