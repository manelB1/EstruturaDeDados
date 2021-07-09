import Lista from "../Lista";

class Fila{
    constructor(){
        this.fila = new Lista();
    }
    
    enqueue(dado){
        this.fila.append(dado)
    }
    
    dequeue(){
        return this.fila.removeBeginning();

    }

    clear(){

        this.fila.clear();

    }
    
    size(){
        return this.fila.size();

    }
    
    isEmpty(){

        return this.fila.isEmpty();

    }

    toString(){

        return this.fila.toString();

    }


}

export default Fila;