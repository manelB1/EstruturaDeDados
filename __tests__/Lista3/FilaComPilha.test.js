import Fila from "../../src/List3/FilaComLista";

let fila; 

beforeEach(()=>{
    fila = new Fila();
});

test("Fila utilizando lista", () =>{
    fila.enqueue(1);
	fila.enqueue(2);
	fila.enqueue(3);
	fila.enqueue(4);
	fila.enqueue(5);
	fila.clear();
	expect(fila.isEmpty()).toBe(true);
})