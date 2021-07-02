class conversor{
    constructor(tamanho = 20){
        this.maxSize = tamanho;
        this.dados = [];
        this.topo = -1;

    }
    push(dado){
        if(this.ifFull()){
            throw new Error("Overflow");
        }else{
            this.dados[++this.topo] = dado;

        }
    }
    pop(){
        if(this.isEmpty()){
            throw new Error("Underflow");
        }else{
            return this.dados[this.topo--]
            
        }
    }
   
    isFull(){
        if(this.maxSize===this.topo){
            return true;
        }else{
            return false;
        }

    }
    isEmpty(){
        return this.topo === -1;

    }
    converte(numero){
        let resto;
        let resultado = "";
        while(numero > 0){
            resto = Math.floor(numero % 2);
            this.push(resto);
            numero = Math.floor(numero/2);

        }
        while(!this.isEmpty()){
            resultado += this.pop.toString();
        }
        
    }

}

export default conversor;