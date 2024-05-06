// Classe de Produto Real
class Produto{
    constructor(nome, preco){
        this.nome = nome;
        this.preco = preco;
    }

    exibirDetalhes(){
        console.log(`Produto: ${this.nome}, Preco R$ ${this.preco.toFixed(2)}`);
    }
}

// Proxy Classe Produto
class ProxyProduto{
    constructor(produto){
        this.produto = produto;
    }


    exibirDetalhes(){
        console.log("Aguardando autenticação...");
        this.autenticar();
        this.produto.exibirDetalhes();
    }
    autenticar(){
        console.log("Autenticando usuario...");
        // Inplementa uma logica para configurar
        console.log("Usuario autenticado com sucesso..."); //Pode retornar a resp. da log de autenticação
        
    }
}

// USO DO PROXY:
const produtoReal = new Produto("Camiseta", 39.90);
const proxyProduto = new  ProxyProduto(produtoReal);

proxyProduto.exibirDetalhes();

