const express = require("express");
const router = express.Router();
const controllerClientes = require("../controller/clientes.controller");
const controllerProdutos = require("../controller/produtos.controller");

// Clientes
router.get("/clientes", controllerClientes.selectClientes);
router.post("/clientes", controllerClientes.insertClientes);
router.put("/clientes", controllerClientes.updateClientes);
router.delete("/clientes", controllerClientes.deleteClientes);
// Produtos
router.get("/produtos", controllerProdutos.selectProdutos);
router.post("/produtos", controllerProdutos.insertProdutos);
router.put("/produtos", controllerProdutos.updateProdutos);
router.delete("/produtos", controllerProdutos.deleteProdutos);

module.exports = router; 
