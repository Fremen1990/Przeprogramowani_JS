/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 2 - "Walidacja"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, która sprawdzi, czy przekazane hasło spełnia określone warunki:
 *
 * a) Ma długość od 3 do 10 znaków
 * b) Zawiera jeden ze znaków specjalnych - !, @ lub #
 * c) Zawiera cyfrę
 *
 * Przykład:
 * validatePassword('test') // => false
 * validatePassword('test11!') // => true
 */

/*
 * Punkty dodatkowe
 *-----------------
 * Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
 * spełnia tego warunku, funkcja powinna rzucić wyjątek.
 */


function validatePassword(password) {
    const isNumberInside = /\d/g;
    if (typeof password !== "string") {
        console.log("password is not a string");
        return false;
    } else if (!(password.length >= 3 && password.length < 11)) {
        console.log("password should be in range from 3 to 10 charts");
        return false;
    } else if (!(password.includes("!") || password.includes("@") || password.includes("#"))) {
        console.log("password should contain one of special signs: !, @ or #");
        return false;
    } else if (!(isNumberInside.test(password))) {
        console.log("password should contain at least one digit");
        return false;
    }
    return true
}


/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
        console.log("Gratulacje!");
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}
verify(validatePassword(""), false);
verify(validatePassword("lol"), false);
verify(validatePassword("lolsdfndfsn"), false);
verify(validatePassword("ToDziala1#"), true);
verify(validatePassword(12345), false);