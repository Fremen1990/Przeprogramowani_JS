/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 3 - "Przeplatanie"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, która dla dwóch podanych parametrów wykona "przeplatanie"
 * - używając kolejnych cyfr parametrów połączy je w jeden string.
 *
 * Przykład:
 * zipIt(111, 222) // => '121212'
 * zipIt(123, 456) // => '142536'
 * zipIt(12, 5555) // => '152555'
 */

/*
 * Punkty dodatkowe
 *-----------------
 * Funkcja powinna weryfikować, czy przekazane parametry są typu number. Jeśli parametry nie
 * spełniają tego warunku, funkcja powinna rzucić wyjątek.
 */

function zipIt(first, second) {
    if (typeof first !== "number" || typeof second !== "number") throw "All arguments are not a number" // sprawdzenie czy wpisane dane sa liczba 
    const firstArray = `${first}`.split("").map(el => parseInt(el)); // definicja pierwszej tablicy => wyciagniecie grawisem argumenty funkcji first/second =>  podzielenie jej splitem na pojedyncze znaki string w tablicy => zmapowani za pomoca metody map wczesniejszej tablicy string na liczby poprzez parseInt dla kazdego elementu z osobna.
    const secondArray = `${second}`.split("").map(el => parseInt(el));
    let result = "" // definicja pustego result która późnie będzie wykorzystywana, żeby do niej dopisywać parametry z indeksu firstArray i secondArray
    for (let i = 0; firstArray[i] || secondArray[i]; i++) { // funkcja wykorzystujaca petle for i, gdzie wykorzystuje dla kazdej tablicy indeks i dodaje je do zmiennej resul, raz index 0 z jednej tablicy raz z drugiej, iterujac index 
        if (firstArray[i]) {
            result += firstArray[i]
        }
        if (secondArray[i]) {
            result += secondArray[i]
        }
    }
    console.log(result)
    return result;
}

/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}

verify(zipIt(111, 222), '121212');
verify(zipIt(123, 456), '142536');
verify(zipIt(12, 5555), '152555');