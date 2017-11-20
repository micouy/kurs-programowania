// Funkcje

// Funkcje bez argumentów
function nazwaFunkcji() {
  var a = 10;
  var b = 5;
  var c = a * b
  console.log(c);
}

// Funkcje z argumentami
function przywitaj(imie) {
  console.log("Cześć, " + imie + "!");
}

function wyswietlWynikMnozenia(a, b) {
  console.log(a * b);
}

// Funkcje zwracające wartość
function f(x) {
  return x;
}

var y = f(10);
console.log(y);

// output:
// 10

function zwrocWiekszaLiczbe(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

// Jak widzisz, w funkcji może występować więcej słów `return`,
// jednak muszą być zastosowane w sytuacjach, które będą się nawzajem
// wykluczać - albo zwróci `a`, albo `b`, nigdy obie.
