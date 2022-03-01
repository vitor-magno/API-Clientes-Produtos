const { QueryTypes } = require('@sequelize/core');
const Clientes = require('../models/clientes')
const db = require('../db/db')

exports.selectClientes = async (req, res) => {

  const clientes = await db.query(
    `SELECT *
     FROM Clientes
    `,

    { type: QueryTypes.SELECT });


    if (clientes !== []) {

      return clientes
      
    } else {
      return { Mensagem: " não tem  Cliente Cadastrado" }
  
  
    }

}

exports.selectClienteEspecifico = async (req, res, id) => {
  
  const clientes = await db.query(
    `SELECT *
     FROM Clientes 
     WHERE id  = ${id}
     `,

    { type: QueryTypes.SELECT });

  if (clientes !== []) {

    
    return clientes
    
  } else {
    return { Mensagem: "Cliente não Encontrado" }
    

  }

}

exports.insertClientes = async (req, res, json) => {
  console.log(req)
  console.log(json)
  const clientes = await db.query(`

  INSERT INTO Clientes 
  (CodigoCliente, Nome, CPF, Sexo, Email, createdAt, updatedAt)
  VALUES( '${json.CodigoCliente}', '${json.Nome}', '${json.CPF}', '${json.Sexo}', '${json.Email}', now(), now() )`,

    { type: QueryTypes.INSERT });

  if (clientes !== []) {

    return { Mensagem: "Cliente cadastrado com sucesso!" }

  } else {

    return { Mensagem: "Cliente já Existente" }

  }

}

exports.updateClientes = async (req, res, json) => {
 

  
 

  const clientes = await db.query(`
  UPDATE Clientes 
  SET CodigoCliente = ${json.CodigoCliente}, 
  Nome =  '${json.Nome}',
  CPF = '${json.CPF}', 
  Sexo = '${json.Sexo}',
  Email = '${json.Email}'
  WHERE id = ${json.id}`,
    { type: QueryTypes.UPDATE });

    if (clientes !== []) {

      return { Mensagem: "Cliente alterado com sucesso!" }
  
    } else {
  
      return { Mensagem: "Cliente não pode ser alterado " }
  
    }

}

exports.deleteClientes = async (req, res, id) => {

  const clientes = await db.query(`
  DELETE FROM Clientes 
  WHERE id = ${id}`,
    { type: QueryTypes.DELETE });

    if (clientes !== []) {

      return { Mensagem: "Cliente removido com sucesso!" }
  
    } else {
  
      return { Mensagem: "Cliente não pode ser removido " }
  
    }

}