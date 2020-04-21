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
  const hasNumber = /\d/g; // regExp który mówi o digitach w przedziale 0-9
  if (typeof password !== "string") {
    console.log(`${password} is not a string`);
    return false;
  } else if (!(password.length > 3 && password.length < 11)) {
    return false;
  } else if (
    !(
      password.includes("!") ||
      password.includes("@") ||
      password.includes("#")
    )
  ) {
    console.log("password should contain !, @ or # ")
    return false;
  } else if (!(hasNumber.test(password))) {
    console.log("password should contain digit");
    return false;
  } else {
    return true
  }
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