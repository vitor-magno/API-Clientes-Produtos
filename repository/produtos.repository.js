const { QueryTypes } = require('@sequelize/core');
const db = require('../db/db')

exports.selectProdutos = async (req, res) => {

  const produtos = await db.query(
    `SELECT *
     FROM Produtos
    `,

    { type: QueryTypes.SELECT });

    
    if (produtos !== []) {

      return produtos
      
    } else {
      
      return { Mensagem: " não tem nem um Produto Cadastrado" }
  
    }

}

exports.selectProdutoEspecifico = async (req, res, id) => {

  const produtos = await db.query(
    `SELECT *
     FROM Produtos 
     WHERE id  = '${id}'
     `,

    { type: QueryTypes.SELECT });

  if (produtos !== []) {

    return produtos
    
  } else {
    
    return { Mensagem: "Produto não Encontrado" }

  }

}

exports.insertProdutos = async (req, res, json) => {

  const produtos = await db.query(`
  INSERT INTO Produtos 
  (CodigoProduto, Nome, Fabricacao, Tamanho, Valor, createdAt, updatedAt)
  VALUES(${json.CodigoProduto}, '${json.Nome}', '${json.Fabricacao}', '${json.Tamanho}', ${json.Valor}, now(), now())`,

    { type: QueryTypes.INSERT });

  if (produtos !== []) {

    return { Mensagem: "Produto cadastrado com sucesso!" }

  } else {

    return { Mensagem: "Produto já Existente" }

  }

}

exports.updateProdutos = async (req, res, json) => {

  const produtos = await db.query(`
  UPDATE Produtos 
  SET CodigoProduto = ${json.CodigoProduto}, 
  Nome =  '${json.Nome}',
  Fabricacao = '${json.Fabricacao}', 
  Tamanho = '${json.Tamanho}',
  Valor = '${json.Valor}'
  WHERE id = ${json.id}`,
  
    { type: QueryTypes.UPDATE });

    if (produtos !== []) {

      return { Mensagem: "Produto alterado com sucesso!" }
  
    } else {
  
      return { Mensagem: "Produto não pode ser alterado " }
  
    }

}

exports.deleteProdutos = async (req, res, id) => {

  const produtos = await db.query(`
  DELETE FROM Produtos 
  WHERE id = ${id}`,
    { type: QueryTypes.DELETE });

    if (produtos !== []) {

      return { Mensagem: "Produto removido com sucesso!" }
      
    } else {
      return { Mensagem: "Produto não pode ser removido " }
  
  
    }

}