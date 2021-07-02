import Fracao from "../src/Fracao";

let f1, f2, f3;

beforeEach(()=>{
    f1 = new Fracao(1,4)
    f2 = new Fracao(2,5)
})

test("Teste de operacoes", ()=>{
    f3 = f1.multiplicacao(f2);
    expect(f3.toString()).toBe("2/20");

    f3 = f1.divisao(f2);
    expect(f3.toString()).toBe("5/8");


});

