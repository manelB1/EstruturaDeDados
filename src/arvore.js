const VERMELHO = 'red'
const PRETO = 'black'

export class arvoreRB {
  nil;
  raiz;

  constructor() {
    this.nil = { pai: null, cor: PRETO };
    this.raiz = this.nil;
  }

  rotacaoEsquerda(no) {
    let filhoDireito = no.direito;
    no.direito = filhoDireito.esquerdo;
    
    if (filhoDireito.esquerdo != this.nil) 
      filhoDireito.esquerdo.pai = no;
      filhoDireito.pai = no.pai;
    
    if (no.pai == this.nil) 
      this.raiz = filhoDireito;

    else if (no == no.pai.esquerdo) 
      no.pai.esquerdo = filhoDireito;
    
    else no.pai.direito = filhoDireito;
    
    filhoDireito.esquerdo = no;
    
    no.pai = filhoDireito;
  }

  rotacaoDireita(no) {
    //console.log("rightRotate:" + no.key);
    let filhoEsquerdo = no.esquerdo;
    no.esquerdo = filhoEsquerdo.direito;

    if (filhoEsquerdo.direito != this.nil) 
    filhoEsquerdo.direito.pai = no;
    filhoEsquerdo.pai = no.pai;
    
    if (no.pai == this.nil) 
    this.raiz = filhoEsquerdo;
    
    else if (no == no.pai.direito) 
    no.pai.direito = filhoEsquerdo;
    
    else no.pai.esquerdo = filhoEsquerdo;
    filhoEsquerdo.direito = no;
    no.pai = filhoEsquerdo;
  }

  inserir(no) {
    no.pai = this.nil;
    let temp = this.nil;
    let raiz = this.raiz;
    
    while (raiz != this.nil) {
      temp = raiz;
      if (no.key < raiz.key) raiz = raiz.esquerdo;
      else raiz = raiz.direito;
    }

    no.pai = temp;
    if (temp == this.nil) 
    this.raiz = no;
    else if (no.key < temp.key) temp.esquerdo = no;
    else temp.direito = no;

    no.esquerdo = this.nil;
    no.direito = this.nil;
    no.cor = VERMELHO;
    this.reparoDeInsercao(no);
  }

  reparoDeInsercao(no) {
    let temp;
    while (no.pai.cor == VERMELHO) {
      if (no.pai == no.pai.pai.esquerdo) {
        temp = no.pai.pai.direito;
        if (temp.cor == VERMELHO) {
          no.pai.cor = PRETO;
          temp.cor = PRETO;
          no.pai.pai.cor = VERMELHO;
          no = no.pai.pai;
        } else {
          if (no == no.pai.direito) {
            no = no.pai;
            this.rotacaoEsquerda(no);
          }
          no.pai.cor = PRETO;
          no.pai.pai.cor = VERMELHO;
          this.rotacaoDireita(no.pai.pai);
        }
      } else {
        temp = no.pai.pai.esquerdo;
        if (temp.cor == VERMELHO) {
          no.pai.cor = PRETO;
          temp.cor = PRETO;
          no.pai.pai.cor = VERMELHO;
          no = no.pai.pai;
        } else {
          if (no == no.pai.esquerdo) {
            no = no.pai;
            this.rotacaoDireita(no);
          }
          no.pai.cor = PRETO;
          no.pai.pai.cor = VERMELHO;
          this.rotacaoEsquerda(no.pai.pai);
        }
      }
    }
    this.raiz.cor = PRETO;
  }

  
  buscar(raiz, chave) {
    if (!raiz) return null
    if (chave == raiz.key) return raiz;
    if (chave < raiz.key) return this.buscar(raiz.esquerdo, chave);
    else return this.buscar(raiz.direito, chave);
  }

  minimo(raiz) {
    //console.log("minimum:" + raiz.key);
    while (raiz.esquerdo != this.nil) {
      raiz = raiz.esquerdo;
    }
    return raiz;
  }

  transpor(noA, noB) {
    if (noA.pai == this.nil) this.raiz = noB;
    else if (noA == noA.pai.esquerdo) noA.pai.esquerdo = noB;
    else noA.pai.direito = noB;
    noB.pai = noA.pai;
  }

  excluir(no) {
    console.log("delete:" + no.key);
    let raiz;
    let temp = no;
    let corInicialDoNo = temp.cor;

    if (no.esquerdo == this.nil) {
      raiz = no.direito;
      this.transpor(no, no.direito);
    } else if (no.direito == this.nil) {
      raiz = no.esquerdo;
      this.transpor(no, no.esquerdo);
    } else {
      temp = this.minimo(no.direito);
      corInicialDoNo = temp.cor;
      raiz = temp.direito;
      if (temp.pai == no) {
        raiz.pai = temp;
      } else {
        this.transpor(temp, temp.direito);
        temp.direito = no.direito;
        temp.direito.pai = temp;
      }
      this.transpor(no, temp);
      temp.esquerdo = no.esquerdo;
      temp.esquerdo.pai = temp;
      temp.cor = no.cor;
    }
    if (corInicialDoNo == PRETO) this.reparoDeExclusao(raiz);
  }

  reparoDeExclusao(raiz) {
    let irmao;
    while (raiz != this.raiz && raiz.cor == PRETO) {
      if (raiz == raiz.pai.esquerdo) {
        irmao = raiz.pai.direito;

        if (irmao.cor == VERMELHO) {
          irmao.cor = PRETO;
          raiz.pai.cor = VERMELHO;
          this.rotacaoEsquerda(raiz.pai);
          irmao = raiz.pai.direito;
        }

        if (irmao.esquerdo.cor == PRETO && irmao.direito.cor == PRETO) {
          irmao.cor = VERMELHO;
          raiz = raiz.pai;
        } else {
          if (irmao.direito.cor == PRETO) {
            irmao.esquerdo.cor = PRETO;
            irmao.cor = VERMELHO;
            this.rotacaoDireita(irmao);
            irmao = raiz.pai.direito;
          }
          irmao.cor = raiz.pai.cor;
          raiz.pai.cor = PRETO;
          irmao.direito.cor = PRETO;
          this.rotacaoEsquerda(raiz.pai);
          raiz = this.raiz;
        }
      } else {
        irmao = raiz.pai.esquerdo;
        if (irmao.cor == VERMELHO) {
          irmao.cor = PRETO;
          raiz.pai.cor = VERMELHO;
          this.rotacaoDireita(raiz.pai);
          irmao = raiz.pai.esquerdo;
        }

        if (irmao.direito.cor == PRETO && irmao.esquerdo.cor == PRETO) {
          irmao.cor = VERMELHO;
          raiz = raiz.pai;
        } else {
          if (irmao.esquerdo.cor == PRETO) {
            irmao.esquerdo.cor = PRETO;
            irmao.cor = VERMELHO;
            this.rotacaoEsquerda(irmao);
            irmao = raiz.pai.esquerdo;
          }
          irmao.cor = raiz.pai.cor;
          raiz.pai.cor = PRETO;
          irmao.esquerdo.cor = PRETO;
          this.rotacaoDireita(raiz.pai);
          raiz = this.raiz;
        }
      }
    }
    raiz.cor = PRETO;
  }
}
