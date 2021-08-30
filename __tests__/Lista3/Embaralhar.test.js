import Lista from "../../src/Lista";
import Embaralhar from "../../src/List3/Embaralhar";

test("Colocando os numeros em ordem aleatoria", ()=>{
    let l = new Lista();

    l.add(1)
    l.add(2)
    l.add(3)
    l.add(4)
    l.add(5)
    expect(l.toString()).toBe("5->4->3->2->1");
    l = Embaralhar(l)
    console.log(l.toString())
    
})