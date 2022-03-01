"use strict";

const Sequelize = require("sequelize");

const sequelize = new Sequelize("teste_api_clientes", "root", "213", {
  host: "localhost",
  dialect: "mysql",
  operatorsAliases: false,
  timezone: "-03:00",
  connectionTimeout: 100000,
  logging: false,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Rodando API...");
  })
  .catch((err) => {
    console.error("Erro na API:", err);
  });

module.exports = sequelize;

