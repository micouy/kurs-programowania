# Warunki, operatory logiczne i zagnieżdżone instrukcje warunkowe
Poznaliśmy już instrukcje warunkowe. Używaliśmy słów kluczowych i zmiennych typu `boolean`, żeby wykonywać (lub nie) określone instrukcje. Teraz dowiemy się, jak pisać bardziej złożone warunki i uporządkujemy naszą wiedzę dotyczącą poznanych słów kluczowych, żeby stworzyć zagnieżdżone instrukcje warunkowe.

## Warunki
Nauczyliśmy się już, że instrukcja warunkowa zostaje wykonana w zależności od wartości warunku - `true` lub `false`. Ta wartość może zostać wyrażona w różny sposób. Możemy użyć zmiennej typu `boolean`, np.:
```javascript
var x = true;

if (x) {
    console.log("Warunek został spełniony.");
}
```

Innym sposobem są różne wyrażenia logiczne:
* Związane z liczbami:
    * `x > y` - porównuje dwie liczby, jest prawdziwe, jeśli `x` jest większe od `y`.
    * `x < y` - porównuje dwie liczby, jest prawdziwe, jeśli `x` jest mniejsze od `y`.
    * `x >= y` - porównuje dwie liczby, jest prawdziwe, jeśli `x` jest większe lub równe `y`.
    * `x <= y` - porównuje dwie liczby, jest prawdziwe, jeśli `x` jest mniejsze lub równe `y`.
* Porównujące wartości:
    * `x == y` - porównuje dwie wartości, jest prawdziwe, jeśli `x` jest takie samo jak `y`.
    * `x != y` - zaprzeczenie `x == y`, jest prawdziwe, jeśli porównywane są różne wartości.
* Dotyczące pojedynczej wartości:
    * `!x` - zaprzeczenie `x`, jest prawdziwe, jeśli `x` jest fałszywe.
* Związane z wartościami logicznymi - operatory logiczne.

## Operatory logiczne
W poprzedniej lekcji omawialiśmy zmienne typu `boolean` na przykładzie codziennych sytuacji, np. jeśli pada śnieg, to ubiorę płaszcz zimowy. Co jeśli chcę sprawdzić, czy prawdziwe są dwa warunki, np. jeśli w lodówce są jajka i w szufladzie jest mąka, to zrobię omleta? Co jeśli chcę sprawdzić, czy prawdziwy jest jeden z dwóch warunków, np. jeśli pada deszcz lub pada śnieg, to ubiorę kurtkę nieprzemakalną? Z pomocą przychodzą operatory logiczne - "i" oraz "lub".

Operator "i" ma symbol `&&`. Znak "and" znajdziesz nad cyfrą 7. Stosuje się go w ten sposób:
```javascript
var saJajka = true;
var jestMaka = true;

if (saJajka && jestMaka) {
    console.log("Zrobię omleta!");
}
```

Operator "lub" ma symbol `||`. Znak pionowej kreski znajdziesz nad klawiszem Enter. Stosuje się go w ten sposób:
```javascript
var padaDeszcz = false;
var padaSnieg = true;

if (padaDeszcz || padaSnieg) {
    console.log("Ubiorę kurtkę nieprzemakalną.");
}
```

Operatory logiczne działają tak samo jak w matematyce.

Operator "i" daje wartość prawdziwą tylko wtedy, gdy warunki po obu jego stronach są prawdziwe:

**q && p**

q \ p | 0 | 1
---|---|---
0 | 0 | 0
1 | 0 | 1

Operator "lub" daje wartość prawdziwą wtedy, gdy warunek przynajmniej po jednej z jego stron jest prawdziwy:

**q || p**

q \ p | 0 | 1
---|---|---
0 | 0 | 1
1 | 1 | 1

## Zagnieżdżone instrukcje warunkowe
Zagnieżdżone instrukcje warunkowe to nic innego niż instrukcje warunkowe wewnątrz instrukcji warunkowych. Przydają się, gdy wiele czynników składa się na wybór odpowiedniej reakcji. Najlepiej zobaczyć to na przykładzie:
```javascript
var swieciSlonce = true;
var wiejeWiatr = true;

if (swieciSlonce) {
    if (wiejeWiatr) {
        console.log("Ubiorę lekką kurtkę.");
    }
}
```

Instrukcja sprawdza, czy świeci słońce i czy wieje wiatr. Jeśli tak jest, wyświetla tekst. Ten przykład nie ma za bardzo sensu, bo moglibyśmy po prostu napisać `if (swieciSlonce && wiejeWiatr)`, dlatego rozważmy następny, w którym decydujemy, co zrobić, jeśli dany warunek nie zostanie spełniony:
```javascript
var swieciSlonce = true;
var wiejeWiatr = false;

if (swieciSlonce) {
    if (wiejeWiatr) {
        console.log("Ubiorę lekką kurtkę.");
    } else {
        console.log("Ubiorę krótkie spodenki.");
    }
} else {
    console.log("Ubiorę ciepłą kurtkę.");
}
```

Instrukcja działa w ten sposób:
1. Jeśli świeci słońce, to:
    1. jeśli wieje wiatr, to ubiorę lekką kurtkę.
    2. w przeciwnym wypadku (jeśli nie wieje wiatr) ubiorę krótkie spodenki.
2. W przeciwnym wypadku (jeśli nie świeci słońce) ubiorę ciepłą kurtkę.

Zauważ, że każde z słów kluczowych `else` odnosi się do warunku `if` na tym samym "poziomie". Wcięcia w kodzie służą temu, by łatwo było zobaczyć strukturę instrukcji (co do czego się odnosi). Można potraktować cały blok:
```javascript
    if (wiejeWiatr) {
        console.log("Ubiorę lekką kurtkę.");
    } else {
        console.log("Ubiorę krótkie spodenki.");
    }
```

jako jedną instrukcję. Jeśli tak zrobimy, kod staje się czytelniejszy:
```javascript
var swieciSlonce = true;
var wiejeWiatr = false;

if (swieciSlonce) {
    // jakaś instrukcja zawierająca if i else
} else {
    console.log("Ubiorę ciepłą kurtkę.");
}
```

## Ćwiczenia
* Stwórz program zawierajcy instrukcje warunkowe `if - else` używając 5 wybranych wyrażeń logicznych.
* Stwórz program zawierajcy instrukcje warunkowe `if - else` używając operatorów "i" oraz "lub".
* Stwórz program zawierajcy zagnieżdżone instrukcje warunkowe. Użyj słów kluczowych `if`, `else` oraz `if else`. Wykorzystaj przykład z życia codziennego (np. wybór jedzenia w restauracji, wybór produktu ze względu na cenę, instrukcja wymiany żarówki).
* Spróbuj stworzyć instrukcję warunkową `if - else`, której warunek będzie zawierał kilka operatorów (możesz użyć nawiasów, by je pogrupować).
