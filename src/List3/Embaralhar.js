import Lista from "../Lista";

export default function Embaralhar(lista){
    
    let aux = new Lista();
    while(!lista.isEmpty()){
        aux.addAt(Math.floor((Math.random() * aux.size()) + 1), lista.removeEnd());
    }

    let x = aux.removeBeginning();
    aux.addAt(Math.floor((Math.random() * aux.size()) + 1), x);
    return aux;
    
}

