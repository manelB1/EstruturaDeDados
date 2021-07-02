import Teste from "../src/Teste";

let p;
beforeEach(()=>{
    p = new Teste();

})

test("Instancia", ()=>{
    expect(p.funcao()).toBe("ola mundo");
})