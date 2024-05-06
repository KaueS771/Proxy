# Objeto Real
class ServiceReal:
    def executar(self):
        print("executando o servico real...")
        
#Proxy:
class ProxyServico:
    def __init__(self):
        self.serviceReal = ServiceReal()
        
    def executar(self):
        print("Antes da execução do serviço...")
        self.serviceReal.executar()
        print("Depois da execução do serviço...")
        
#Uso do Proxy:
proxy = ProxyServico()
proxy.executar()