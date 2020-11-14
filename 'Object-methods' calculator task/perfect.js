// отполированный вариант


let calc = {
	sum() {
		return this.num1 + this.num2;
	},

	mul() {
		return this.num1 * this.num2;
	},

	read() {
		this.num1 = +prompt('Введите первое число');
		this.num2 = +prompt('Введите второе число');
	}

};
calc.read();
alert(calc.sum());
alert(calc.mul()); 

