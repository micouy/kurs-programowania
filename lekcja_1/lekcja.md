# Wypisywanie w konsoli, zmienne i operatory matematyczne
## Wypisywanie w konsoli
Na początku nauki JavaScript będziemy często posługiwać się funkcją `console.log`. Funkcja to instrukcja dla programu. Pozwala ona wyświetlić tekst w konsoli. Aby napisać "Witaj świecie!", musimy przekazać do tej instrukcji wspomniany wcześniej tekst. Musimy pamiętać o takich rzeczach jak:
* Nazwa funkcji - `console.log`.
* Nawias otwierający - `(`
* Parametr, w tym przypadku tekst (cudzysłowy są bardzo ważne) - `"Witaj świecie!"`
* Nawias zamykający - `)`
* Średnik na końcu linii - `;`

W praktyce wygląda to w ten sposób:
```javascript
console.log("Witaj świecie!");
```

W naszej konsoli pojawi się tekst - `Witaj świecie!`.

## Zmienne
Zmienne to bardzo ważna rzecz w programowaniu. Działają tak samo jak w matematyce - zapewniają nam możliwość odczytu wartości (np. liczby) przechowywanej gdzieś w pamięci programu i jej zmiany.
Jeżeli chcemy nadać zmiennej `x` wartość `5`, a potem nadać zmiennej `y` wartość `x + 10` (czyli odczytać wartość zmiennej `x` i dodać do niej `10`), w matematyce używamy takiego zapisu:
```
x = 5
y = x + 10
```

Bardzo podobna rzecz dzieje się w JavaScript. Tworząc nową zmienną usimy jednak pamiętać o takich rzeczach jak:
* Słowo kluczowe (keyword) - `var`</br>Jego użycie oznacza dla programu "Stwórz nową zmienną".
* Nazwa zmiennej - `x`
* Znak równości - ` = `</br>By zachować czystość w kodzie stosuj spacje przed i za nim.
* Wartość zmiennej - `5`
* Średnik na końcu linii - `;`

W praktyce wygląda to w ten sposób:
```javascript
var x = 5;
```

Aby **zmienić** wartość wcześniej stworzonej zmiennej używamy zapisu:
```javascript
x = 10;
```

Możemy stworzyć również drugą zmienną:
```javascript
var y = x + 10;
```

Stworzyliśmy już dwie zmienne, ale nie widzimy żadnego efektu. Aby zobaczyć, jaką wartość ma zmienna w danym momencie, użyjmy poznanego wcześniej polecenia - `console.log`:
```javascript
var x = 10;
console.log(x);
```

W konsoli pojawi się:
```
10
```

To przykład nieco bardziej skomplikowanego kodu. Czytaj uważnie:
```javascript
var x = 10;
console.log(x);

x = 5;
console.log(x);

var y = x + 20;
console.log(y);
console.log(x);
```

Tworzymy zmienną `x` i nadajemy jej wartość `10`. Wypisujemy ją w konsoli, a następnie zmieniamy na `5` i robimy to samo. Później tworzymy zmienną `y` i nadajemy jej wartość `x + 20`. Zauważ, że wartość zmiennej `x` nie jest zmieniana. Następnie wypisujemy wartości obu zmiennych. W konsoli pojawi się:
```
10
5
25
5
```

## Operatory matematyczne
W omawianych przykładach poznałeś(aś) już jeden operator matematyczny - `+`. Operatorami nazywamy znaki lub wyrażenia, które upraszczają zapis różnych instrukcji. Nie mamy na przykład polecenia `dodaj`, tylko wspomniany wcześniej operator `+`. Kolejnym jest znak równości, który w programowaniu nie oznacza równości wartości lewego i prawego wyrażenia, tylko przypisywanie wartości zmiennej.

Przykładami operatorów są:
* `+`, `-`, `*`, `/` - dodawanie, odejmowanie, mnożenie i dzielenie. Zauważ, że nie zmieniają one wartości zmiennych, których dotyczy ta operacja, np:
    ```javascript
    var x = 10;
    console.log(x);
    var y = x / 5;
    console.log(x);
    ```

    W konsoli pojawi się:
    ```
    10
    10
    ```

    Oznacza to, że wartość `x` się nie zmieniła.
* `+=` - oznacza "zwiększ wartość zmiennej o daną wartość", np:
    ```javascript
    var x = 5;
    console.log(x);
    x += 2;
    console.log(x);
    ```

    W konsoli pojawi się:
    ```
    5
    7
    ```

    Oznacza to, że wartość `x` została zmieniona.
* `-=` - oznacza "zmniejsz wartość zmiennej o daną wartość".
* `*=` - oznacza "zwiększ wartość zmiennej daną ilość razy", np:
    ```javascript
    var x = 10;
    console.log(x);
    x *= 5;
    console.log(x);
    ```

    W konsoli pojawi się:
    ```
    10
    50
    ```

* `/=` - oznacza "zmniejsz wartość zmiennej daną ilość razy". 

Wszystkie wymienione operatory działają również z liczbami ujemnymi i z przecinkiem.