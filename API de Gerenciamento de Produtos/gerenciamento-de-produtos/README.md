# API de Gerenciamento de Produtos

Esta é uma API RESTful para gerenciar um catálogo de produtos, construída com .NET Core e Dapper, utilizando um banco de dados SQLite em memória.

## Funcionalidades

- **CRUD de Produtos**: Criar, ler, atualizar e excluir produtos.
- **Validação de Dados**: Verifica se o nome e o preço do produto são válidos.
- **Documentação com Swagger**: Interface de documentação interativa para explorar os endpoints da API.

## Tecnologias Utilizadas

- .NET 6.0
- Dapper
- SQLite em memória
- Swagger para documentação

## Pré-requisitos


- .NET 6.0 SDK
- Postman

## Como Executar o Projeto

1. **Clonar o Repositório**:

   Entre no reposítorio do git chamado "prova guarida".

   Clone o Reposítorio da Api de gerenciamento de produtos.

2. **Restaurar as Dependências**

   Executar o seguinte comando para restaurar as dependências:

   ```bash
   dotnet restore

3. **Executar a Aplicação**

   Iniciar a aplicação usando o comando:

   ```bash
   dotnet run

A API deverá estar disponível em http://localhost:5045, basta acessar o link para acessar a documentação interativa da api no Swagger.

## Endpoints da API

Os principais endpoints da API:

- **GET** `/api/products` - Lista todos os produtos
- **GET** `/api/products/{id}` - Obtém um produto pelo ID
- **POST** `/api/products` - Cria um novo produto
- **PUT** `/api/products/{id}` - Atualiza um produto existente
- **DELETE** `/api/products/{id}` - Remove um produto


## Coleção do Postman

Deixei um arquivo para importar a coleção pronta no Postman =)

O nome dele é ProdutoAPI.postman_collection.json e pode ser encontrado no diretório raiz do projeto da API de gerencimento de produtos.

Agora basta entrar no Postman e clicar no botão importar, e usar este arquivo para ter a coleçao pronta importada.

