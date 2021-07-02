import Pilhas from "../src/L1Q3";

let p;
beforeEach(() =>{
    p = new Pilhas(5)
});

test("Testando pilha", ()=>{
    expect(p.isEmptyA()).toBe(true);
    expect(p.isEmptyB()).toBe(true);
    p.pushA("1");
    
    expect(p.isEmptyA()).toBe(false);
    expect(p.isEmptyB()).toBe(true);
    p.popA();
    p.pushB("4");
    
    expect(p.isEmptyA()).toBe(true);
    expect(p.isEmptyB()).toBe(false);
    p.popB();

    expect(p.isEmptyA()).toBe(true);
    expect(p.isEmptyB()).toBe(true);

});