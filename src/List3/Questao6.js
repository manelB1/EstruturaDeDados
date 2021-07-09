import Lista from "../Lista";

export default function Questao6(lista, a , b){
    let aux = new Lista();
    let cont = 0;
    let tmp = lista.head.proximo;

    while(cont < b){
        if(cont >= a && cont < b){
            aux.append(tmp.dado);

        }
        tmp = tmp.proximo;
        cont++;
    }
    return aux;
    
}