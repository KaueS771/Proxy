// Objeto Real
class ServiceReal{
    executar(){
        console.log("Executando o serviço real...");
    }
}

//Proxy
class ProxyService{
    constructor(){
        this.serviceReal = new ServiceReal();
    }

    executar(){
        console.log("Antes de executar o serviço...")
        this.serviceReal.executar();
        console.log("Depois de executar o serviço...")
    }
}

// Uso do Proxy
const proxy = new ProxyService();
proxy.executar();