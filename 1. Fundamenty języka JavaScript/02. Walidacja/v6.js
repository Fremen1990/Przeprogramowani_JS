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
  if (typeof password !== "string") {
    try {
      throw new Error("password is not a string");
    } catch (error) {
      console.log(error);
      return false;
    }
  }
  if (!(password.length > 3) || !(password.length < 11)) {
    return false;
  } else if (
    !(
      password.includes("#") ||
      password.includes("@") ||
      password.includes("!")
    )
  ) {
    return false;
  } else if (!/\d/g.test(password)) {
    return false;
  } else {
    return true;
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
verify(validatePassword(123455), false);
verify(validatePassword("wsrfvb@42"), true);
verify(validatePassword("wsrfvb@42134"), false);
