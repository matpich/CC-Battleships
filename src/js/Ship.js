class Ship {
	constructor(x,y) {
		this.type = 'none';
		this.size = 0;
	}
	
	ToString() {
		return `SHIP: ${this.type} ${this.size}`;
	}
}

class Carrier extends Ship {
	constructor(x,y) {
		super(x,y);
		this.type = 'carrier';
		this.size = 5;
	}	
}


class Battleship extends Ship {
	constructor(x,y) {
		super(x,y);
		this.type = 'battleship';
		this.size = 4;
	}	
}

class Destroyer extends Ship {
	constructor(x,y) {
		super(x,y);
		this.type = 'destroyer';
		this.size = 3;
	}	
}

class Submarine extends Ship {
	constructor(x,y) {
		super(x,y);
		this.type = 'submarine';
		this.size = 2;
	}	
}

export { Ship, Battleship, Destroyer, Submarine };
