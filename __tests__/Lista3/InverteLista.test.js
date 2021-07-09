import Inverte from "../../src/List3/InverteLista";
import Lista from "../../src/Lista";

let i, l;

beforeEach(() => {
	i = new Inverte();
	l = new Lista();
});

test("Inverter ordem da lista", () => {
	l.append(1);
	l.append(2);
	l.append(3);
	l.append(4);
	l.append(5);
	i.inverter(l);
	l.append(6);
	i.inverter(l);
	expect(l.toString()).toBe("6->1->2->3->4->5");
});