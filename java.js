
// SECTION calculator functions

function add (a,b) {
	let sum = a+b;
	return sum;
}

function subtract (a,b) {
	let subs = a-b;
	return subs;	
}

function divide (a,b) {
    let divi = a / b;
    return divi;
}

function sum (input) {
		const addition = input.reduce((a, b) => a + b, 0);
		return addition; 	
}

function multiply (a,b) {
	return a * b;
}

function power(a,b) {
	return Math.pow(a,b)	
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

let equal = (a,op,b) => {
	switch (op) {
		case `+`:
		return add(a,b);
		case `-`:
		return subtract(a,b);
		case `*`:
		return multiply(a,b);
		case `/`:
		return divide(a,b);

	}	
};


// SECTION Manipulate the screen

let smallscr = () => {
	return document.querySelector(`#anotation`).textContent;
}

let prntSmallscr = (input) => {
	document.querySelector(`#anotation`).textContent=input;
}

let bigscr = () => {
	return document.querySelector(`#screen`).textContent;
}

let prntBigscr = (input) => {
	if (input == "") {
		document.querySelector(`#screen`).textContent = input
	} else {
		document.querySelector(`#screen`).textContent = fromatNum(input);
	}
}

let fromatNum = (input) => {
	let n = Number(input)
	let value = n.toLocaleString("de-DE");
	return value;
}

let reverseNum = (input) => {
	return Number(input.replace(/[.,]/g,""));
}

let operator = document.getElementsByClassName("operator");
for (let i = 0; i<operator.length; i++) {
	operator[i].addEventListener('click', function() {
		if(this.id=="clear") {
			prntBigscr("0");
			prntSmallscr("0");
		}
		else if(this.id=="delete") {
			let output = reverseNum(bigscr()).toString();
			if(output) { //its a number and its not empty
				output = output.substr(0,output.length-1);
				prntBigscr(output);
			}
		} else {
			let output = bigscr();
			let history = smallscr();
			if(output != ""){
				output = reverseNum(output);
				history = history + output;
			}
			
		}
	});
}


let number = document.getElementsByClassName("key");
for (let i = 0; i<number.length; i++) {
	number[i].addEventListener('click', function() {
		let output = reverseNum(bigscr());
		if (output!=NaN) { //output a number
			output=output+this.id;
			prntBigscr(output);
			
		}
	})
}





/* 
document.addEventListener("click", function(e) {
	const key = document.querySelector(`.key[data-key]`);
	console.log(key)
});


let disVal, disScr;

disScr = document.querySelector(`.display`).textContent = "0" */
