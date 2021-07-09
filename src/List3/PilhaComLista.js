import Lista from "../Lista";


class Pilha{
     
    constructor(){
        this.l = new Lista();

    }
    push(dado){
        this.l.add(dado)

    }
    pop(){
        return this.l.removeBeginning();

    }
    clear(){
        this.l.clear();

    }
    size(){
        return this.l.size();

    }
    isEmpty(){
        return this.l.isEmpty();

    }
    toString(){

        return this.l.toString();

    }
}

export default Pilha;