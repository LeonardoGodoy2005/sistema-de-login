# 🔐 Sistema de Autenticação com JWT

Este projeto é uma API REST desenvolvida com Node.js e Express que realiza autenticação de usuários utilizando criptografia de senha e JSON Web Token (JWT).

---

## 🚀 Funcionalidades

* Cadastro de usuários
* Login com validação de credenciais
* Criptografia de senha com bcrypt
* Geração de token JWT
* Rota protegida com autenticação

---

## 🛠️ Tecnologias utilizadas

* Node.js
* Express
* JavaScript
* bcrypt
* jsonwebtoken

---

## 📂 Estrutura do projeto

login-system/
├── backend/
│   ├── server.js
│   ├── package.json
└── frontend/

---

## ⚙️ Como rodar o projeto

### 1. Clonar o repositório

git clone https://github.com/LeonardoGodoy2005/sistema-de-login.git

---

### 2. Acessar a pasta backend

cd sistema-de-login/backend

---

### 3. Instalar dependências

npm install

---

### 4. Rodar o servidor

node server.js

---

## 🌐 Endpoints

### 🔹 Cadastro

POST /register

Body:

{
"email": "[teste@email.com](mailto:teste@email.com)",
"senha": "123456"
}

---

### 🔹 Login

POST /login

Body:

{
"email": "[teste@email.com](mailto:teste@email.com)",
"senha": "123456"
}

---

### 🔹 Dashboard (rota protegida)

GET /dashboard

Header:

Authorization: SEU_TOKEN

---

## 🔐 Autenticação

A autenticação é feita utilizando JWT (JSON Web Token).
Após o login, o usuário recebe um token que deve ser enviado no header das requisições protegidas.

---

## 📌 Observações

* Os dados estão sendo armazenados em memória (array), ou seja, são perdidos ao reiniciar o servidor.
* Este projeto pode ser evoluído com banco de dados como PostgreSQL ou Supabase.

---

## 📈 Melhorias futuras

* Integração com banco de dados
* Criação de interface frontend
* Deploy da aplicação
* Sistema de logout
* Refresh token

---

## 👨‍💻 Autor

Leonardo Godoy

---

## ⭐ Projeto para fins de estudo e portfólio
