class Pilhas{
    constructor(size = 10){
        this.dados = [];
        this.topo = 1;
        this.maxsize = size;


    }
    isEmpty(){

        return this.topo === 0;

    }
    size(){
        return this.topo + 1;
    }
    
    isFull(){
        return this.size() === this.maxsize;

    }
    clear(){
        this.topo = -1;
    }
    top(){
        if(!this.isEmpty()){
            return this.dados[this.topo];
        }
        else{
            throw new Error("Underflow");
        }

    }
    push(newData){
      if(!this.isFull()){
        throw new Error("Overflow");
      }
      else{
          this.dados[++this.topo]=newData;
      }
    }
    
    pop(){
        if(this.isEmpty()){
            throw new Error("Underflow");
        }
        else{
            return this.dados[this.topo--];
        }

    }
    toString(){
        let result = "[";
        for(let i=0; i<this.topo; i++){
            result +=this.dados[i]+" "
        }
        result+="]"
        return result;

    }


}
    
    export default function verificacao(texto){
        let p = new Pilhas(texto.lenght);
        
    }