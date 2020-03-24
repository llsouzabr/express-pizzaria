const Cardapio = require('../models/Cardapio');

let cardapioController = {
    listarCardapio: (req, res)=>{
        let listaDePizza = Cardapio.listarCardapio();
        res.render('cardapio', {cardapio:listaDePizza, tituloDaPagina:"Será que da certo?"})
    },

    viewFormCadastro: (req, res) => {
        res.render('cadastroPizza')
    }

}

module.exports = cardapioController