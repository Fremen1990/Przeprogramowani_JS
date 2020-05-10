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
  if (typeof first && typeof second !== "number") {
    try {
      throw new Error("first and second should be a number");
    } catch (error) {
      console.log(error);
    }
  }
  const firstConvertedArray = [...`${first}`];
  const secondConvertedArray = [...`${second}`];
  let zippedResult = "";
  for (let i = 0; firstConvertedArray[i] || secondConvertedArray[i]; i++) {
    if (firstConvertedArray[i]) {
      zippedResult += firstConvertedArray[i];
    }
    if (secondConvertedArray[i]) {
      zippedResult += secondConvertedArray[i];
    }
  }
  return zippedResult;
}

/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(zipIt(111, 222), "121212");
verify(zipIt(123, 456), "142536");
verify(zipIt(12, 5555), "152555");
verify(zipIt(12, 5555), "152555");
verify(zipIt("wsgr0"), "poprawny bład");
