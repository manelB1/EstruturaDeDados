import { arvoreRB } from "../src/arvoreRubroNegra";

const VERMELHO = "red";
const PRETO = 'black'



test("Testando a raiz", () => {
  let rb = new arvoreRB();
  rb.inserir({ key: 2, cor: VERMELHO });
  const raiz = rb.raiz
  expect(raiz).toHaveProperty('key')
  expect(raiz.key).toBe(2)
  expect(raiz.pai).toBe(rb.nil)
});

test("Teste de remoção", ()=>{
  let rb = new arvoreRB();
  let raiz = null;

  rb.inserir({ key: 2, cor: VERMELHO });
  raiz = rb.raiz;
  expect(raiz.key).toBe(2)

  
  rb.inserir({ key: 3, cor: VERMELHO });
  rb.inserir({ key: 1, cor: VERMELHO });
  expect(rb.buscar(rb.raiz, 3).key).toBe(3)
  expect(rb.buscar(rb.raiz, 1).key).toBe(1)

  rb.excluir(rb.buscar(rb.raiz, 1))
  expect(rb.buscar(rb.raiz, 1)).toBeNull()
  
 


  
})
