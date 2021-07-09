import Fila from "../../src/List3/FilaComLista";

let fila;

beforeEach(()=>{
    fila = new Fila();
});

test("Fila utilizando lista", () =>{
    f.enqueue(1);
	f.enqueue(2);
	f.enqueue(3);
	f.enqueue(4);
	f.enqueue(5);
	f.clear();
	expect(f.isEmpty()).toBe(true);
})