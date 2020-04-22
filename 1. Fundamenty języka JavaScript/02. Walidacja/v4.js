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
    if (!(typeof password !== "string")) {
        try {
            throw new Error("Password have to be string")
        } catch (error) {
            console.log(error);
        }
    }
    const regexCheck = /(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#].{3,10})/g.test(password)
    return regexCheck

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