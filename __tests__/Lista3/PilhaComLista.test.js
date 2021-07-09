import Pilha from "../../src/List3/PilhaComLista";

let pilha;


beforeEach(()=>{
    pilha = new Pilha();
});

test("Utilizando pilhando usando fila", ()=> {
    pilha.push(1)
    pilha.push(2)
    pilha.push(3)
    pilha.push(4)
    pilha.push(5)
    pilha.clear()
    expect(pilha.isEmpty()).toBe(true);
})