const repositoryProdutos = require('../repository/produtos.repository')

exports.selectProdutos = async (req, res) => {
    try {
        const  id = await req.query.id

        let resposta
        
        if(!id){
            
            resposta = await repositoryProdutos.selectProdutos(req, res)
            res.status(200).send( resposta );
            
        }else {
            
            resposta = await repositoryProdutos.selectProdutoEspecifico(req, res, id)
            res.status(200).send( resposta[0] );
        }
            

    } catch (error) {
        res.send('Erro interno na buscar  de Produtos');
    }

}

exports.insertProdutos = async (req, res) => {
    
    
    try {
    const json = req.body

    const resposta = await repositoryProdutos.insertProdutos(req, res, json)
    res.status(200).send({ resposta });

    } catch (error) {
        res.send('Erro interno na cadastro de Produtos');
    }
}

exports.updateProdutos = async (req, res) => {
    try {
        const json = req.body
        const resposta = await repositoryProdutos.updateProdutos(req, res,json)
        res.status(200).send({ resposta });

    } catch (error) {
        res.send('Erro interno na atualização de Produtos');
    }
}

exports.deleteProdutos = async (req, res) => {

    try {
        const  id = await req.query.id

        let resposta
        
        if(!id){
            
            res.status(200).send({mensagem:" erro interno"});

        }else{

            resposta = await repositoryProdutos.deleteProdutos(req, res,id)
            res.status(200).send({ resposta });
        }
    } catch (error) {
        res.send('Erro interno na remoção do Produtos');
    }

}




