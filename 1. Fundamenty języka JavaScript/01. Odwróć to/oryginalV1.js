/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 1 - "Odwróć to"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, która odwróci przekazany do niej string.
 *
 * Przykład:
 * reverseMe('abc') // => 'cba'
 */

/*
 * Punkty dodatkowe
 *-----------------
 * Funkcja powinna weryfikować, czy przekazany parametr jest typu string. Jeśli parametr nie
 * spełnia tego warunku, funkcja powinna rzucić wyjątek.
 */

function reverseMe(input) {
  if (typeof input === "string") {
    const splittedArray = input.split("");
    const reversedSplittedArray = splittedArray.reverse();
    const joinedReversedSplittedArray = reversedSplittedArray.join("");
    return joinedReversedSplittedArray;
  } else {
    return alert("wyjatek, input nie jest stringiem");
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
verify(reverseMe("a"), "a");
verify(reverseMe("abc"), "cba");
verify(reverseMe("Przeprogramowani"), "inawomargorpezrP");
verify(reverseMe("Brawo!"), "!owarB");
