class Fracao{
    constructor(n , d=1){
        if(d == 0){
            throw new Error("Não existe divisao por 0")
        }else{
        
            this.numerador = n;
            this.denominador = d;
         }
        
    }

    multiplicacao(f){
         
        return new Fracao(this.numerador*f.numerador, this.denominador*f.denominador);

    }
    divisao(f){
        return new Fracao(this.numerador*f.denominador, this.denominador*f.numerador);


    }

    toString(){
        return `${this.numerador}/${this.denominador}`

    }
}

export default Fracao