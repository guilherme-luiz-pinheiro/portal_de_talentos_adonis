# 🧠 Portal de Talentos - Backend (AdonisJS V5)

Este é o backend do **Portal de Talentos**, desenvolvido com **AdonisJS V5** e banco de dados **MySQL**. Ele fornece toda a estrutura de autenticação, cadastro de usuários, envio de e-mails e integração com o frontend React.

---

## 🛠️ Tecnologias Utilizadas

- ⚙️ AdonisJS V5 (Node.js)  
- 🐬 MySQL  
- 🗃️ Lucid ORM  
- 🔐 JWT Authentication  
- 📧 Mailer (SMTP)  
- 📡 Axios (ViaCEP)  

---

## 📦 Instalação

```bash
git clone https://github.com/seu-usuario/portal-talentos-backend.git
cd portal-talentos-backend
npm install
```

### ⚙️ Configuração

1. Copie o arquivo de exemplo `.env`:

```bash
cp .env.example .env
```

2. Edite as variáveis de ambiente conforme seu setup:

```env
DB_CONNECTION=mysql
DB_HOST=localhost
DB_PORT=3306
DB_USER=root
DB_PASSWORD=sua_senha
DB_NAME=portal_talentos

SMTP_HOST=smtp.seudominio.com
SMTP_PORT=587
SMTP_USERNAME=seuemail@dominio.com
SMTP_PASSWORD=suasenha
FROM_EMAIL=seuemail@dominio.com
FROM_NAME="Portal de Talentos"
```

3. Gere a chave da aplicação:

```bash
node ace generate:key
```

4. Rode as migrations:

```bash
node ace migration:run
```

---

## ▶️ Execução

```bash
node ace serve --watch
```

A API estará disponível em: [http://127.0.0.1:3333](http://127.0.0.1:3333)

---

## ✨ Funcionalidades

- Cadastro e autenticação de usuários com **JWT**
- Envio de e-mail com link para criação de senha
- CRUD de candidatos
- Integração com **ViaCEP** para preenchimento automático de endereço
- Seleção de candidatos com envio automático de e-mail
- Notificação para candidatos selecionados ao acessarem o sistema

---

## 🔒 Segurança

- Endpoints protegidos por middleware de autenticação
- Verificação de permissões para garantir acesso apenas a **gestores**
- Validações de entrada via **schema validator**

---

## 🧪 Testes Rápidos

Use o **Insomnia** ou **Postman** para testar os endpoints com um token JWT válido.

---

## ✅ Requisitos

- Node.js **v18+**  
- MySQL **8+**  
- Servidor **SMTP funcional** para envio de e-mails  

---

## 📬 Contato

Para dúvidas, sugestões ou bugs, abra uma **issue** neste repositório ou entre em contato diretamente.

