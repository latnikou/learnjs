// неотполированный(мой первоначальный) вариант

let calc = {
	num1: 0,
	num2: 0,

	read() {
		this.num1 = Number(prompt('Введите первое число'));
		this.num2 = Number(prompt('Введите второе число'));
	},

	sum() {
		return (this.num1 + this.num2);
	},

	mul() {
		return (this.num1 * this.num2);
	}
};
calc.read();
alert(calc.sum());
alert(calc.mul());