// SECTION calculator functions

let add = (a, b) => parseFloat(a) + parseFloat(b);

function subtract(a, b) {
	let subs = parseFloat(a) - parseFloat(b);
	return subs;
}

function divide(a, b) {
	let divi = parseFloat(a) / parseFloat(b);
	return divi;
}

function sum(input) {
	const addition = input.reduce((a, b) => a + b, 0);
	return addition;
}

function multiply(a, b) {
	return parseFloat(a) * parseFloat(b);
}

function power(a, b) {
	return Math.pow(a, b)
};

function factorial(input) {
	if (input == 0) return 1;
	let product = 1;
	for (let i = input; i > 0; i--) {
		product *= i;
	}
	return product;
}
////// NOTE EQUAL FUNCTION

let equal = (a, op, b) => {
	switch (op) {
		case `+`:
			return add(a, b);
			break;
		case `-`:
			return subtract(a, b);
			break;
		case `*`:
			return multiply(a, b);
			break;
		case `/`:
			return divide(a, b);
			break;

	}
}


// SECTION Manipulate the screen

let getHistory = () => {
	return document.getElementById(`anotation`).innerText;
}

let printHistory = (input) => {
	document.getElementById(`anotation`).innerText = input;
}

let getOutput = () => {
	return document.getElementById(`screen`).innerText;
}

let printOutput = (input) => {
	if (input == "") {
		document.getElementById(`screen`).innerText = input
	} else {
		document.getElementById(`screen`).innerText = getFormattedNumber(input);
	}
}

let getFormattedNumber = (input) => {
	let n = Number(input)
	let value = n.toLocaleString("de-DE");
	return value;
}

let reverseNumberFormat = (input) => {
	return Number(input.replace(/[.,]/g, ''));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i < operator.length; i++) {
	operator[i].addEventListener('click', function () {

		if (this.id == "clear") {
			printHistory("");
			printOutput("");

		} else if (this.id == "delete") {
			let output = reverseNumberFormat(getOutput()).toString();
			if (output) { //if output has a value
				output = output.substr(0, output.length - 1);
				printOutput(output);
			}
		} else {
			let output = getOutput();
			let history = getHistory();
			//if (output == "" && history != "") {
			//	if (isNaN(history[history.length - 1])) {
			//		history = history.substr(0, history.length - 1);
			//	}
			//}
			if (output != "" || history != "") {
				output = output == "" ? output : reverseNumberFormat(output);
				history = history + output;

				if (this.id == "=") {
					let dispRes = history.split("")
					let firstDigit = dispRes.slice(0,1)
					let operator = history.slice(1,2)
					let secondDigit = history.slice(2)
					console.log(dispRes)
					var result = equal(firstDigit, operator, secondDigit);
					printOutput(result);
					printHistory("");

				} else {
					history = history + this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}

	});
}


let number = document.getElementsByClassName("key");
for (let i = 0; i < number.length; i++) {
	number[i].addEventListener('click', function () {
		let output = reverseNumberFormat(getOutput());
		if (output != NaN) { //output a number
			output = output + this.id;
			printOutput(output);

		}
	})
}

window.addEventListener('keydown', function (e) {
	const key = document.querySelector(`button[data-key="${e.key}"]`);
	if (!key) return;
	key.click();
	key.classList.add('playing');
	setTimeout(RemoveClass, 100);

	function RemoveClass() {
		key.classList.remove('playing');
	}
});