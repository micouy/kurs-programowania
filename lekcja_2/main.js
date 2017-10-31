// LOGIKA CZ. 1


// boolean - typ zmiennej o wartości 'prawda' lub 'fałsz'
var a = true;
var b = false;


var a = true;

if (a) {
	console.log("a jest prawdziwe.");
}

// output:
// a jest prawdziwe.


var a = false;

if (a) {
	console.log("a jest prawdziwe.");
} else {
	console.log("a nie jest prawdziwe.");
}

// output:
// a nie jest prawdziwe.


var a = false;
var b = false
var c = false;

if (a) {
	console.log("a jest prawdziwe.");
} else if (b) {
	console.log("a nie jest prawdziwe, b jest prawdziwe.");
} else if (c) {
	console.log("a i b nie są prawdziwe, c jest prawdziwe.");
} else {
	console.log("a, b i c nie są prawdziwe.");
}

// output:
// a, b i c nie są prawdziwe.


var a = false;
var b = false
var c = true;

if (a) {
	console.log("a jest prawdziwe.");
} else if (b) {
	console.log("a nie jest prawdziwe, b jest prawdziwe.");
} else if (c) {
	console.log("a i b nie są prawdziwe, c jest prawdziwe.");
} else {
	console.log("a, b i c nie są prawdziwe.");
}

// output:
// a i b nie są prawdziwe, c jest prawdziwe.


var a = true;
var b = true;

if (a) {
	console.log("a jest prawdziwe.");
}

if (b) {
	console.log("b jest prawdziwe.");
}

// output:
// a jest prawdziwe.
// b jest prawdziwe.


var a = false;
var b = 0;

if (a) {
	b = "a jest prawdziwe.";
} else {
	b = "a nie jest prawdziwe.";
}

console.log(b);

// output:
// a nie jest prawdziwe.