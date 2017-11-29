# Pętle
<del>W programowaniu pętle służą do powieszenia się, kiedy twój kod:</del>
* <del>nie działa, nie wiesz czemu.</del>
* <del>działa, nie wiesz czemu.</del>

Pętle w programowaniu służą do wykonania danych poleceń:
* określoną ilość razy.
* dopóki dany warunek jest spełniony.
* w nieskończoność.

## Pętla wykonująca polecenia określoną ilość razy
Aby wykonać polecenie `n` ilość razy, musimy zastosować pętlę `for`. Jej zapis może wydawać się skomplikowany:
```javascript
for (var i = 0; i < n; i++) {
  // polecenia
}
```

Rozbijmy ten kod na części pierwsze:
* słowo kluczowe `for`
* nawias `(`
* wyrażenie `var i = 0;`<br>Zmienna `i` jest *iteratorem*. Przechowuje on informacje o aktualnym potwórzeniu pętli (później wyjaśnimy, jakie dokładnie informacje). Jak widzisz na początku pętli ma wartość `0`. Nie jest to jedyna możliwa wartość, ale taki zapis to standard.
* wyrażenie `i < n`<br>Środkowe wyrażenie jest warunkiem, który musi być spełniony, żeby pętla wykonała dane powtórzenie. W tym przypadku to "powtórz, jeśli `i` jest mniejsze od `n`". Jak pamiętamy `i` to iterator, a `n` to liczba powtórzeń.
* wyrażenie `i++`<br>Ostatenie wyrażenie to polecenie, które ma zostać wykonane po potwórzeniu. `i++` to inaczej `i += 1`, czyli po prostu "zwiększ iterator o jeden".
* nawias `)`
* klamra `{`
* polecenia
* klamra `}`

Teraz wyjaśnimy, co oznaczają tajemnicze 3 wyrażenia w nawiasie. Pętla działa w następujący sposób:
1. Ustaw stan początkowy (wartość iteratora) (wyrażenie 1).
2. Powtarzaj:
  1. Sprawdź, czy warunek jest spełniony (wyrażenie 2).
  2. Wykonaj wszystkie polecenia.
  3. Wykonaj polecenie po pętli (wyrażenie 3).

Żeby to zrozumieć, spójrzmy na ten kod:
```javascript
var n = 4;

for (var i = 0; i < n; i++) {
  console.log(i);
}
```

Wypisuje on wartość iteratora w trakcie każdego potwórzenia pętli. Output:
```
0
1
2
3
```

Jak widzisz, iterator kończy się na liczbie 3, która jako ostatnia spełnia warunek `i < n` (bo 4 już nie jest mniejsze od 4), ale polecenie zostało wykonane `n` razy, czyli 4.

Aby poćwiczyć, zobaczmy, jak działają kolejne przykłady:
```javascript
var a = 0;

for (var x = 0; x < 5; x += 1) {
  a += x;
  console.log(x);
}
```
Output:

```
1
3
6
10
15
```

```javascript
var n = 10;

for (var i = 3; i < n; i += 2) {
  console.log(i);
}
```

W tym przypadku zaczynamy liczenie od 2, a iterator jest zwiększany za każdym razem o 2. Output:
```
3
5
7
9
```

Jak widzimy, polecenie zostało wykonane 4 a nie 10 razy.
```javascript
// zacznij od
var a = -3;
// mniejszy od
var b = 10;
// zwiększaj o
var c = 4;

for (var i = a; i < b; i += c) {
  console.log(i);
}
```

Output:
```
-3
1
5
9
```

## Pętla wykonująca polecenia dopóki warunek jest spełniony
Aby wykonywać polecenia dopóki zachodzi dany warunek, musimy użyć pętli `while`. Wygląda ona w ten sposób:
```javascript
while (warunek) {
  // polecenia
}
```

Jest ona prostsza od pętli `for`. Składa się z takich elementów:
* słowo kluczowe `while`
* nawias `(`
* warunek
* nawias `)`
* klamra `{`
* polecenia
* klamra `}`

Zobaczmy, jak działa:
```javascript
var a = 5;
var b = 10;

while (a < b) {
  a += 1;
  console.log(a);
}
```

Output:
```
6
7
8
9
10
```

Jak widzimy, ostatnia wartość `a` jest równa `b` (10 nie jest mniejsze od 10), a to dlatego, że zwiększyliśmy jej wartość po sprawdzeniu warunku `a < b`.
