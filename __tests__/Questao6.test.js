import Lista from "../src/Lista";
import Questao6 from "../src/List3/Questao6";

test("Função da substring", ()=>{
    let l = new Lista();
    let substring = new Lista();

    l.add('a');
    l.add('b');
    l.add('a')
    l.add('c');
    l.add('a')
    l.add('x');
    l.add('i');
    expect(l.toString()).toBe("i->x->a->c->a->b->a");
    
    substring = Questao6(l, 1, 4);
    expect(substring.toString()).toBe("x->a->c");


})