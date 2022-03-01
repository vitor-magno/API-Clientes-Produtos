const repositoryClientes = require('../repository/clientes.repository')

exports.selectClientes = async (req, res) => {
    try {
        const  id = await req.query.id

        let resposta
        
        if(!id){
            
            resposta = await repositoryClientes.selectClientes(req, res)
            res.status(200).send({ resposta });
            
        }else {
            
            resposta = await repositoryClientes.selectClienteEspecifico(req, res,id)
            res.status(200).send( resposta[0]);
        }
            

    } catch (error) {
        res.send('Erro interno na buscar  de Clientes');
    }

}

exports.insertClientes = async (req, res) => {
    
    try {
    const json = req.body

    const resposta = await repositoryClientes.insertClientes(req, res, json)
    res.status(200).send({ resposta });

    } catch (error) {
        res.send('Erro interno na cadastro de Clientes');
    }
}

exports.updateClientes = async (req, res) => {
    try {
        const json = req.body
        const resposta = await repositoryClientes.updateClientes(req, res,json)
        res.status(200).send({ resposta });

    } catch (error) {
        res.send('Erro interno na atualização de Clientes');
    }
}

exports.deleteClientes = async (req, res) => {

    try {
        const  id = await req.query.id
            

        let resposta
        
        if(!id){
            res.status(200).send({mensagem:" erro interno"});
        }else{
            resposta = await repositoryClientes.deleteClientes(req, res,id)
            res.status(200).send({ resposta });
        }
    } catch (error) {
        res.send('Erro interno na remoção do Clientes');
    }

}




