import Pilha from "../src/Pilha"

export default function inverte(texto){
    
    let p = new Pilha(texto.lenght)
    
    let result = "";

    for(let c of texto){
        p.push(c);
    }

    while(!p.isEmpty()){
        result+= p.pop();
    }

    return result;
}
