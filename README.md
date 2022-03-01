# API-Clientes-Produtos
1º Passo: Clone repositório
- git clone https://github.com/vitor-magno/API-Clientes-Produtos.git

2º Passo: Entrar no projeto
- Usar o comando cd API-Clientes-Produtos

3º Passo: Instalar dependências
- npm install

4º Passo: Alterar IP/User/Password do Banco de Dados na pasta "db" e na pasta "config"

5º Passo: Rodar as Migrations(Criar tabela do banco)
- npx sequelize-cli db:migrate
- npm run migrate

6º Passo: Rodar projeto
- npm start
