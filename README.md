# Desafio-FullStack-backend

## 1 - Tecnologias

Um pouco das tecnologias que foram utilizadas no projeto:

- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/pt-br/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [Zod](https://zod.dev/?id=table-of-contents)
- [Bcryptjs](https://www.npmjs.com/package/bcrypt)

A URL base da aplicação:
https://api-contact-render.onrender.com

## 2 - Instalação e uso

### Requisitos:

- [NodeJS](https://nodejs.org/en/)
- Banco de dados [PostgreSQL](https://www.postgresql.org)

Clone o projeto em sua máquina e instale as dependências com o comando:

```shell
yarn
```

Em seguida, crie um arquivo **.env**, copiando o formato do arquivo **.env.example**:

```
env.example -> .env
```

Configure as variáveis de ambiente com suas credenciais do Postgres e uma nova database da sua escolha.

Execute as migrations com o comando:

```
yarn typeorm migration:run -d src/data-source.ts

```

Para rodar o servidor localmente:

```
yarn dev
```

---

## 3 - Endpoints

| Método | Rota        | Descrição                               |
| ------ | ----------- | --------------------------------------- |
| POST   | /user       | Criação de um cliente.                  |
| GET    | /user       | Listando todos os usuários.             |
| GET    | /user/owner | Listando o próprio usuário.             |
| PATCH  | /user       | Edita o usuário.                        |
| DELETE | /user       | Deleta o usuário.                       |
| POST   | /login      | Retorna o token.                        |
| POST   | /contacts   | Cria um contato para o cliente.         |
| GET    | /contacts   | Lista todos os contatos.                |
| PATCH  | /contacts   | Edita o contato específico do cliente.  |
| DELETE | /contacts   | Deleta o contato específico do cliente. |

---

#### As requisições podem ser testadas em programas como o [Insomnia](https://insomnia.rest/download), [Postman](https://www.postman.com), etc!

---

### CREATE USER

### `/user`

#### Não é necessário autenticação

#### Todos os campos são obrigatórios

- name_complet - STRING
- email - STRING, EMAIL
- password - STRING
- phone - STRING

### Retorno esperado

**STATUS 201**

```json
{
  "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
  "name": "usuario",
  "email": "usuario@mail.com",
  "phone": "9 9999-9999",
  "createdAt": "2023-06-04"
}
```

---

### LIST USER

### `/user`

#### É necessário autenticação

### Retorno esperado

**STATUS 200**

```json
[
  {
    "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
    "name": "usuario",
    "email": "usuario@mail.com",
    "phone": "9 9999-9999",
    "createdAt": "2023-06-04",
    "contact": []
  }
]
```

---

### LIST USER OWNER

### `/user`

#### É necessário autenticação

### Retorno esperado

**STATUS 200**

```json
{
  "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
  "name": "usuario",
  "email": "usuario@mail.com",
  "phone": "9 9999-9999",
  "createdAt": "2023-06-04",
  "contact": []
}
```

---

### EDIT USER

### `/user`

### É necessário autenticação

### Campos opcionais

- name_complet - STRING
- email - STRING, EMAIL
- password - STRING
- phone - STRING

### Retorno esperado

**STATUS 200**

```json
{
  "id": "39e60115-0aa2-4064-8083-b6c3ec8f9b2f",
  "name": "Usuario Atualizado",
  "email": "usuario@mail.com",
  "phone": "9 9999-9999",
  "createdAt": "2023-06-04"
}
```

---

### DELETE USER

### `/user`

### É necessário autenticação

### Retorno esperado

**STATUS 204**

---

### LOGIN

### `/login`

### Não é necessário autenticação

### Todos os campos são obrigatórios

- email - STRING
- password - STRING

### Retorno esperado

**STATUS 200**

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImRvdWdsYXNwYXRoQGdtYWlsLmNvbSIsImlhdCI6MTY4NDk4NDY1NiwiZXhwIjoxNjg1MDcxMDU2LCJzdWIiOiI4MTkyMTFhMy00NThjLTQ3NjktOTcxOS0xMmM2NTdhYTNkMzQifQ.VC4dYCkPL2b3Lxjvd-VK8gd9bcP7pUcdA113Ejmk_Kc"
}
```

---

### CREATE CONTACTS

### `/contacts`

### É necessário autenticação

### Campos obrigatórios

- name_complet - STRING, LENGTH(45)
- email - STRING, EMAIL, LENGTH(45)
- phone - STRING, LENGTH(12)

### Retorno esperado

**STATUS 201**

```json
{
	"id": "47d00323-2189-4c-a99e-df9659c6d192",
	"full_name": "teste de contato",
	"email": "contato@gmail.com",
	"phone": "12345678987",
	"createdAt": "2023-06-01"
}
```

---

### LIST CONTACTS

### `/contacts`

### É necessário autenticação

### Retorno esperado

**STATUS 200**

```json
[
	{
		"id": "9136da3e-2025-48c6-80e9-17c56fcda4a6",
		"full_name": "teste de contato",
		"email": "contato1@gmail.com",
		"phone": "12345678987",
		"createdAt": "2023-06-01"
	},
	{
		"id": "3e0b732d-12c5-4cde-a3bc-0f5f76504509",
		"full_name": "teste de contato",
		"email": "contato2@gmail.com",
		"phone": "12345678987",
		"createdAt": "2023-06-01"
	}
]
```

---


### EDIT CONTACT BY ID

### `/contacts/id`

### É necessário autenticação

Atualiza o contato passado na URL

### Campos opcionais

- name_complet: STRING
- email: STRING
- phone - STRING

### Retorno esperado

**STATUS 200**

```json
{
	"id": "47d00323-2189-4c-a99e-df9659c6d192",
	"full_name": "teste de contato",
	"email": "contato@gmail.com",
	"phone": "12345678987",
  	"createdAt": "2023-06-01"
}
```

---

### DELETE CONTACT BY ID

### `/contacts/id`

### É necessário autenticação

Deleta o contato passado na URL

### Retorno esperado

**STATUS 204**
