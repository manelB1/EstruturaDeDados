import Lista from "../Lista";


class Inverte {
	constructor() {}

	inverter(lista) {
		

        let x = lista.size();
        let l = new Lista();

		

		for (let i = 0; i < x; i++) {
			l.add(lista.removeBeginning());
		}

		for (let i = 0; i < x; i++) {
			lista.append(l.removeBeginning());
		}
	}
}

export default Inverte;