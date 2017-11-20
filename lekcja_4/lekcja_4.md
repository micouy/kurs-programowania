# Funkcje
W naszych programach często będziemy chcieli użyć jakiegoś kawałka kodu kilka razy, w wielu miejscach. Z pomocą przychodzą nam funkcje. W naszej analogii z robotnikiem funkcje to instrukcje wykonania jakiegoś zadania. Mogą one wyglądać na przykład tak:

Instrukcja "Zbuduj dom":
1. Wykop dziurę.
2. Zalej dziurę betonem.
3. Zbuduj ściany.
4. Zbuduj dach.
5. Wstaw drzwi.

## Funkcje bez argumentów
Pierwszy typ funkcji, ktry poznamy, będzie działać podobnie do zamieszczonej wyżej instrukcji. Wyglądają np. tak:
```javascript
function przywitajSie() {
  console.log("Cześć!");
}
```

Zwróć uwagę na bardzo ważną rzecz - po uruchomieniu programu w konsoli nic się nie pojawi. Dlaczego? Ponieważ na razie przekazaliśmy naszemu robotnikowi tylko *definicje* instrukcji. Żeby robotnik je wykonał, musimy je *wywyołać*:
```javascript
przywitajSie();
```


W konsoli pojawi się:
```
Cześć!
```

Konstrukcja definicji funkcji wygląda następująco:
* Słowo kluczowe - `function`
* Nazwa funkcji (bez cudzysłowów, podobnie jak nazwa zmiennej)
* Argumenty (na razie zostawiamy puste nawiasy) - `()`
* Klamra otwierająca
* Polecenia (może ich być wiele)
* Klamra zamykająca

Wygląda to tak:
```javascript
function nazwaFunkcji() {
  // polecenia
}
```

## Funkcje z argumentami
Na razie powiedzieliśmy o funkcjach, które nie przyjmują argumentów. Służą po to, by uprościć nam programowanie - nie musimy kopiować mnóstwa linijek kodu, a gdy chcemy coś zmienić, robimy to tylko w jednym miejscu. Kolejny typ to takie, które przyjmują argumenty. Argumenty działają w ten sposób: chcemy, żeby nasz robotnik zbudował kilka domów. Każdy jest budowany według takiego samego schematu, ale różnią się one szerokością i długością, dlatego dajemy naszemu robotnikowi instrukcję, które będą wymagały podania tych parametrów:

Instrukcja "Zbuduj dom", wymaga podania szerokości i długości:
1. Wykop dziurę na szerokość równą podanej szerokości i długość równą podanej długości.
2. Zalej dziurę betonem.
3. Zbuduj ściany na szerokość równą podanej szerokości i długość równą podanej długości.
4. Zbuduj dach.
5. Wstaw drzwi.

Taką instrukcję możemy wywołać mówiąc do robotnika "Zbuduj dom o szerokości 5m i długości 10m".

W jaki sposób możemy stworzyć funkcję, która będzie potrzebowała podania parametrów? Musimy podać argumenty (czyli właśnie parametry), które przyjmuje. Zróbmy to na przykładzie funkcji, która będzie wyświetlała przywitanie. Przy jej wywołaniu będzie trzeba podać imię. W zrozumiałym dla nas języku będzie brzmiało to mniej więcej tak:

Instrukcja "przywitaj", wymaga podania imienia:
1. Wyświetl przywitanie składające się z "Cześć, ", imienia oraz "!".

A tak będzie wyglądał nasz kod:
```javascript
function przywitaj(imie) {
  console.log("Cześć, " + imie + "!");
}
```

Funkcja `przywitaj` wymaga podania argumentu `imie`. Jak widzisz, wykorzystujemy go w `console.log` w taki sam sposób, jakby to była zmienna.

Gdy wywołamy ją:
```javascript
przywitaj("Basia");
przywitaj("Karol");
```

w konsoli pojawi się:
```
Cześć, Basia!
Cześć, Karol!
```

Możemy używać funkcji wewnątrz innych:
```javascript
function a() {
  console.log("a");
}

function b() {
  a();
  console.log("b");
}

b();
```

W konsoli pojawj się:
```
a
b
```

## Funkcje zwracające wartość
Ostatni typ zmiennych to takie, które zwracają wartość. Działają bardzo podobnie do funkcji matematycznych. Weźmy dla przykładu najprostszą:
```
f(x) = x
```

<table>
  <tbody>
    <tr>
      <td>x</td>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>itd.</td>
    </tr>
    <tr>
      <td>y</td>
      <td>0</td>
      <td>1</td>
      <td>2</td>
      <td>3</td>
      <td>itd.</td>
    </tr>
  </tbody>
</table>

Można powiedzieć, że funkcja `f` wymagająca parametru `x` zwraca wartość równą `x`. Zobaczmy to na takim przykładzie:
```
f(x) = x
y = f(10)
```

Zmienna `y` ma wartość `10`. To dlatego, że funkcja `f` ją zwróciła. By osiągnąć coś takiego w programie, używamy słowa kluczowego `return`. Oznacza ono "zwróć". Po nim następuje wartość, która ma zostać zwrócona. Użycie `return` oznacza również zakończenie wykonywania funkcji - żadne polecenia nie zostaną po nim wykonane. W praktyce wygląda to tak:
```javascript
function f(x) {
  return x;
}

var y = f(10);
console.log(y);
```

W konsoli pojawi się:
```
10
```

Możemy rozważyć również przypadek, w którym zwracana wartość będzie zależna od wielu argumentów:
```javascript
function pomnoz(x, y) {
  return x * y;
}

var a = pomnoz(10, 50);
console.log(a);
```

W konsoli pojawi się:
```
500
```

Należy pamiętać, że dana funkcja może albo wykonywać polecenia zależne od argumentów, albo zwracać wartość. Stworzenie funkcji wykonującej obie te rzeczy nie jest niemożliwe, jednak wprowadza zamieszanie i jest uważane za złą praktykę (przy czym `console.log` jest poleceniem używanym często do tak zwanego debugowania, czyli sprawdzania, czy kod działa poprawnie, dlatego możemy je wykorzystać, by np. sprawdzić, czy wartość jest poprawna przed zwróceniem jej przez funkcję).

## Ćwiczenia
* Stwórz funkcję, która będzie pobierała 2 argumenty i wypisywała większą z podanych wartości.
* Stwórz funkcję, ktra będzie pobierała 3 argumenty i zwracała wartość najmniejszego z nich.
* Stwórz funkcję, która będzie pobierała argument i zwracała jego odwrotność (np. 3 -> 1/3).
