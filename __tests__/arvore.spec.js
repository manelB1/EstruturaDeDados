import { arvoreRB } from "../src/arvoreRubroNegra";

const VERMELHO = "red";
const PRETO = 'black'



// test("Testando a raiz", () => {
//   let rb = new arvoreRB();
//   rb.inserir({ key: 2, cor: VERMELHO });
//   const raiz = rb.raiz
//   expect(raiz).toHaveProperty('key')
//   expect(raiz.key).toBe(2)
//   expect(raiz.pai).toBe(rb.nil)
// });

test("Teste de inserir e remover", ()=>{
  let rb = new arvoreRB();
  let raiz = null;

  
  
  

  rb.inserir({ key: 6, cor: VERMELHO });
  raiz = rb.raiz;
  expect(raiz.key).toBe(6)
  
  
  rb.inserir({key: 5, cor: VERMELHO});
  rb.inserir({key: 4, cor: VERMELHO});
  rb.inserir({key: 3, cor: VERMELHO});
  rb.inserir({key: 7, cor: VERMELHO});
  
  rb.excluir(rb.buscar(rb.raiz, 3))
  expect(rb.buscar(rb.raiz, 3)).toBeNull()
  
  console.log(rb.raiz)
  
  
  
  
  
  
  // rb.inserir({key: 7, cor: VERMELHO});

  // rb.inserir({ key: 5, cor: VERMELHO });
  // rb.inserir({ key: 3, cor: VERMELHO });
  // rb.inserir({ key: 7, cor: VERMELHO });
  // rb.inserir({ key: 5, cor: VERMELHO });
  // rb.inserir({ key: 7, cor: VERMELHO });
  // rb.inserir({ key: 8, cor: VERMELHO });
  // rb.inserir({ key: 2, cor: VERMELHO });
  // expect(rb.buscar(rb.raiz, 5).key).toBe(5)
  // expect(rb.buscar(rb.raiz, 3).key).toBe(3)
  // expect(rb.buscar(rb.raiz, 7).key).toBe(7)
  // expect(rb.buscar(rb.raiz, 5).key).toBe(5)
  // expect(rb.buscar(rb.raiz, 7).key).toBe(7)
  // expect(rb.buscar(rb.raiz, 8).key).toBe(8)
  // expect(rb.buscar(rb.raiz, 2).key).toBe(2)
  
  


 



  

  
  // console.log(raiz)
  
 


  
})
