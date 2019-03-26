
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

let operate = (a,op,b) => {
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


// SECTION 

document.addEventListener("click", function(e) {
	const key = document.querySelector(`.key[data-key]`);
	console.log(key)
});


let disVal, disScr;

disScr = document.querySelector(`.display`).textContent = "0"
