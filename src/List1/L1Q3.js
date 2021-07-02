class Pilhas{

    constructor(tamanho = 10){
        this. t = tamanho;
        this.dados = [];
        this.topoA = -1;
        this.topoB = tamanho;
    }

    isEmptyA(){
        return this.topoA === -1;
    }
    isEmptyB(){
        return this.topoB ===this.t;
    }
    pushA(dado){
        if(this.isFull()){
            throw new Error("Overflow");

        }
        else{
            this.dados[++this.topoA] = dado;
        }

    }
    pushB(dado){
        if(this.isFull()){
            throw new Error("Overflow");

        }
        else{
            this.dados[--this.topoB] = dado;

        }
    }
    popA(){
        if(this.isEmptyA()){
            throw new Error("Underflw")

        }
        else{
            return this.dados[this.topoA--];
        }
    }
    popB(){
        if(this.isEmptyB()){
            throw new Error("Underflow")

        }
        else{
            return this.dados[this.topoB++];
        }
    }
    isFull(){
        if(this.topoA + 1 === this.topoB || this.topoB==this.topoA){
            return true;

        }
        else{
            return false;
        }
    }


}
export default Pilhas; 