const express = require("express");
const router = express.Router();


// Clientes
router.get("/clientes", controllerClientes);
router.post("/clientes", controllerClientes);
router.put("/clientes", controllerClientes);
router.delete("/clientes", controllerClientes);
// Produtos
router.get("/produtos", controllerProdutos);
router.post("/produtos", controllerProdutos);
router.put("/produtos", controllerProdutos);
router.delete("/produtos", controllerProdutos);

module.exports = router; 
