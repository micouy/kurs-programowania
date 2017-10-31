# Instrukcje warunkowe  i boolean
W praktycznie każdym programie znajdują się instrukcje warunkowe. Są to polecenia, które zostaną wykonane tylko i wyłącznie, jeśli w danym momencie zajdzie dany warunek. W codziennym życiu również wykorzystujemy instrukcje warunkowe, np. kiedy mówimy "Idź do sklepu i kup 10 bułek. Jeżeli nie będzie bułek, to kup chleb.". Zanim nauczymy się tworzyć instrukcje warunkowe, musimy poznać nowy typ zmiennej.

## Boolean
`boolean` (`bool`) to typ zmiennej, który może przyjąć tylko dwie wartości - prawdziwą lub fałszywą (`true` lub `false`). Działa to tak samo jak w logice. Takie zmienne tworzy się w ten sam sposób, jak pozostałe:
```javascript
var x = true;
var y = false;
```

## If
Instrukcje warunkowe wykorzystują słowa kluczowe (keywords). Pierwszą z nich jest `if`. Tworząc instrukcję warunkową, musimy pamiętać o takich rzeczach jak:
* Słowo kluczowe - `if`
* Nawias otwierający - `(`
* Warunek, w tym przypadku zmienna - `a`</br>Warunkiem nie musi być zmienna, może być nim również wyrażenie.
* Nawias zamykający - `)`
* Klamra otwierająca - `{`
* Instrukcja - `console.log("Warunek został spełniony.");`</br>Zauważ, że przed każdą linijką instrukcji stawiamy wcięcie (tab).
* Klamra zamykająca - `}`

Wygląda to w ten sposób:
```javascript
var a = true;

if (a) {
    console.log("Warunek został spełniony.");
}
```

W konsoli pojawi się:
```
Warunek został spełniony.
```

Bardzo ważne jest, żeby zrozumieć działanie warunku. Instrukcja wewnątrz klamr zostanie wykonana tylko i wyłącznie, jeśli w danym momencie warunek ma wartość `true`. Zobacz, co stanie się po zmianie wartości zmiennej `a`.
```javascript
var a = false;

if (a) {
    console.log("Warunek został spełniony.");
}
```

W konsoli nic się nie pojawiło. To dlatego, że warunek miał wartość `false`.

Stwórzmy teraz przykład, który możemy odnieść do prawdziwego życia:
```javascript
var padaDeszcz = true;

if (padaDeszcz) {
    console.log("Wezmę kurtkę.");
}
```

W konsoli pojawi się:
```
Wezmę kurtkę.
```

To dlatego, że warunek ma wartość `true` (został spełniony). Nie stałoby się tak, gdyby miał wartość `false`.

## Else
`else` to kolejne słowo kluczowe. Jest wykorzystywane tylko i wyłącznie w połączeniu z `if`. Jego użycie oznacza dla programu "jeśli warunek `if` nie został spełniony, to...". Działa to w ten sposób:
1. Sprawdź warunek przy `if`.
2. Jeśli został spełniony, to wykonaj instrukcję przy `if`.
3. Jeśli nie został spełniony, to wykonaj instrukcję przy `else`.

Najłatwiej jest pokazać to na przykładzie z codzienności:
```javascript
var ladnaPogoda = false;

if (ladnaPogoda) {
    console.log("Ubiorę krótkie spodenki.");
} else {
    console.log("Lepiej wezmę parasol.");
}
```

W konsoli pojawi się:
```
Lepiej wezmę parasol.
```

Jeżeli nadamy zmiennej `jestLadnaPogoda` wartość `true`, w konsoli pojawi się:
```
"Ubiorę krótkie spodenki.
```

Zauważ, że została wykonana tylko jedna z dwóch instrukcji. Dzieje się tak dlatego, że instrukcja `else` zostanie wykonana tylko i wyłącznie, jeśli warunek `if` nie zostanie spełniony.

Warunek przy `if` nie został spełniony, dlatego jego instrukcja nie została wykonana. Zaistniał więc przeciwny wypadek do warunku (jest ładna pogoda - nie ma ładnej pogody), dlatego została wykonana instrukcja `else`. To kilka innych przykładów:
```javascript
var wLodowceSaJajka = false;

if (wLodowceSaJajka) {
    console.log("Zrobię omleta!");
} else {
    console.log("I tak nie byłem głodny...");
}

// output:
// I tak nie byłem głodny...


var jestemGlodny = true;

if (jestemGlodny) {
    console.log("Zamówię pizzę.");
} else {
    console.log("Zamówię pizzę, chociaż nie jestem głodny.");
}

// output:
// "Zamówię pizzę."
```

## Else if
`else if` to ostatnie słowo kluczowe tej lekcji. Oznacza ono "jeśli poprzednie warunki nie zostały spełniony, a mój warunek został spełniony, to...". Instrukcje warunkowe należy pisać w odpowiedniej kolejności, ponieważ tylko jedna z nich zostanie wykonana. `else if` stosuje się tylko i wyłącznie po `if`, a za nim może znajdować się kolejne `else if`, `else` lub nic. Przedstawmy to na przykładzie:
```javascript
var ladnaPogoda = false;
var padaDeszcz = true;

if (ladnaPogoda) {
    console.log("Ubiorę krótkie spodenki.");
} else if (padaDeszcz) {
    console.log("Lepiej wezmę parasol.");
}
```

W konsoli pojawi się:
```
Lepiej wezmę parasol.
```

Co się stanie przy innych wartościach zmiennych? Zobaczmy:
```javascript
var ladnaPogoda = true;
var padaDeszcz = false;

if (ladnaPogoda) {
    console.log("Ubiorę krótkie spodenki.");
} else if (padaDeszcz) {
    console.log("Lepiej wezmę parasol.");
}
```

W konsoli pojawi się:
```
Ubiorę krótkie spodenki.
```

Dość logiczne, jeśli jest ładna pogoda, to nie ma deszczu, więc założę lekkie ubranie. A co się stanie, gdy zaistnieje tak abstrakcyjny warunek, że obie zmienne są prawdziwe? Zobaczmy:

```javascript
var ladnaPogoda = true;
var padaDeszcz = true;

if (ladnaPogoda) {
    console.log("Ubiorę krótkie spodenki.");
} else if (padaDeszcz) {
    console.log("Lepiej wezmę parasol.");
}
```

W konsoli pojawi się:
```
Ubiorę krótkie spodenki.
```

Jak mówiłem, zostanie wykonana tylko jedna instrukcja - pierwsza od góry, której warunek zostanie spełniony.

Dodajmy teraz `else`. Powróćmy do przykładu z pogodą. Przyjmijmy, że pogoda może mieć tylko takie 3 stany:
1. Ładna pogoda.
2. Pada deszcz.
3. Pada śnieg.

Możemy dostosować nasze ubranie według takiej instrukcji:
```javascript
var ladnaPogoda = false;    // nie ma ładnej pogody
var padaDeszcz = false;     // nie pada deszcz
var padaSnieg = true;       // pada śnieg

if (ladnaPogoda) {              // nie zostaje spełniony
    console.log("Ubiorę krótkie spodenki.");
} else if (padaDeszcz) {        // nie zostaje spełniony
    console.log("Lepiej wezmę parasol.");
} else if (padaSnieg) {         // zostaje spełniony
    console.log("Założę płaszcz zimowy.");
}
```

Jako pierwszy został spełniony trzeci warunek, dlatego w konsoli pojawi się:
```
Założę płaszcz zimowy.
```

Można to jednak zrobić łatwiej. Skoro pogoda może mieć tylko 3 stany, to możemy sprawdzić tylko dwa warunki. Jeżeli nie zostaną one spełnione, to trzeci musi być prawdziwy. Użyjemy do tego `else` (czyli "w przeciwnym przypadku..." lub "jeśli żaden warunek nie został spełniony"):
```javascript
var ladnaPogoda = false;    // nie ma ładnej pogody
var padaDeszcz = false;     // nie pada deszcz
                            // pada śnieg

if (ladnaPogoda) {              // nie zostaje spełniony
    console.log("Ubiorę krótkie spodenki.");
} else if (padaDeszcz) {        // nie zostaje spełniony
    console.log("Lepiej wezmę parasol.");
} else {
    console.log("Założę płaszcz zimowy.");
}
```

Pierwsze dwa warunki nie zostaną spełnione, dlatego w konsoli pojawi się:
```
Założę płaszcz zimowy.
```

## Operacje na zmiennych w instrukcjach warunkowych
Instrukcje warunkowe nie służą jedynie wypisywaniu tekstu w konsoli. Można je wykorzystać, by zmienić wartość innej zmiennej. Zobaczmy przykład przedstawiający zasady piłki nożnej:
```javascript
var goleDruzynyA = 0;
var goleDruzynyB = 0;

var druzynaAStrzelilaGola = false;
var druzynaBStrzelilaGola = true;

if (druzynaAStrzelilaGola) {
    console.log("Gol dla drużyny A!");
    goleDryzynyA += 1;
}

if (druzynaBStrzelilaGola) {
    console.log("Gol dla drużyny B!");
    goleDruzynyB += 1;
}

console.log("Koniec meczu.");

console.log("Gole drużyny A:");
console.log(goleDruzynyA);

console.log("Gole drużyny B:");
console.log(goleDruzynyB);
```

W konsoli pojawi się:
```
Gol dla drużyny B!
Koniec meczu.
Gole drużyny A:
0
Gole drużyny B:
1
```

## Ćwiczenia
* Napisz program wykorzystując zmienną i instrukcję warunkową `if`.
* Napisz program wykorzystując zmienną i instrukcję warunkową `if - else`.
* Napisz program wykorzystując dwie zmienne i instrukcję warunkową `if - else if - else`.

Wypróbuj działanie programu zmieniając wartości zmiennych. Postaraj się przedstawić przykład z codzienności. Niech twoja instrukcja zawiera operacje na zmiennych.