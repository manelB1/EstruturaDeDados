class Fila {
	constructor(tam = 10) {
		this.dados = [];
		this.inicio = 0;
		this.fim = 0;
		this.maxSize = tam;
	}

	enqueue(dado) {
		if (!this.isFull()) {
			this.dados[this.fim++] = dado;
		} else {
			throw new Error("queue overflow");
		}
	}

	dequeue() {
		if (!this.isEmpty()) {
			this.inicio++;
		} else {
			throw new Error("queue underflow");
		}
	}

	isEmpty() {
		if (this.lenght() === 0) {
			return true;
		}
		return false;
	}

	isFull() {
		if (this.lenght() === this.maxSize) {
			return true;
		}
		return false;
	}

	clear() {
		this.inicio = 0;
		this.fim = 0;
	}

	lenght() {
		return this.fim - this.inicio;
	}

	front() {
		if (!this.isEmpty()) {
			return this.dados[this.inicio];
		}
	}
}

export default Fila;