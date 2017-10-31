// Warunki, operatory logiczne i zagnieżdżone instrukcje warunkowe


// Warunki

if (x > y) {
    // instrukcja
}

if (x < y) {
    // instrukcja
}

if (x >= y) {
    // instrukcja
}

if (x <= y) {
    // instrukcja
}

if (x == y) {
    // instrukcja
}

if (x != y) {
    // instrukcja
}

if (!x) {
    // instrukcja
}


// Operatory logiczne

var x = true;
var y = true;

if (x && y) {
    // instrukcja
}

var x = false;
var y = true;

if (x || y) {
    // instrukcja
}


// Zagnieżdżone instrukcje warunkowe

var a = true;
var b = true;

if (a) {
    if (b) {
        // instrukcja
    }
}

var a = true;
var b = false;
var c = true;

if (a) {
    if (b) {
        // instrukcja 1
    } else if (c) {
        // instrukcja 2
    } else {
        // instrukcja 3
    }
} else {
    // instrukcja 4
}