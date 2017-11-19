# Funkcje
W naszych programach często będziemy chcieli użyć jakiegoś kawałka kodu kilka razy, w wielu miejscach. Z pomocą przychodzą nam funkcje. W naszej analogii z robotnikiem funkcje to instrukcje wykonania jakiegoś zadania. Mogą one wyglądać mniej więcej tak:

Instrukcja "Zbuduj dom":
1. Wykop dziurę.
2. Zalej dziurę betonem.
3. Zbuduj ściany.
4. Zbuduj dach.
5. Wstaw drzwi.

Funkcje w programowaniu będą działały w bardzo podobny sposób. Wyglądają np. tak:
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

Na razie powiedzieliśmy o funkcjach, które nie przyjmują argumentów. Służą po to, by uprościć nam programowanie - nie musimy kopiować mnóstwa linijek kodu, a gdy chcemy coś zmienić, robimy to tylko w jednym miejscu. Kolejny typ to takie, które przyjmują argumenty. Argumenty działają w ten sposób: chcemy, żeby nasz robotnik zbudował kilka domów. Każdy jest budowany według takiego samego schematu, ale różnią się one szerokością i długością, dlatego dajemy naszemu robotnikowi instrukcję, które będą wymagały podania tych parametrów:

Instrukcja "Zbuduj dom", wymaga podania szerokości i długości:
1. Wykop dziurę na szerokość równą podanej szerokości i długość równą podanej długości.
2. Zalej dziurę betonem.
3. Zbuduj ściany na szerokość równą podanej szerokości i długość równą podanej długości.
4. Zbuduj dach.
5. Wstaw drzwi.

Taką instrukcję możemy wywołać mówiąc do robotnika "Zbuduj dom o szerokości 5m i długości 10m".

W jaki sposób możemy stworzyć funkcję, która będzie potrzebowała podania parametrów? Musimy podać argumenty, które przyjmuje. Zróbmy to na przykładzie funkcji, która będzie wyświetlała przywitanie. Przy jej wywołaniu będzie trzeba podać imię.
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