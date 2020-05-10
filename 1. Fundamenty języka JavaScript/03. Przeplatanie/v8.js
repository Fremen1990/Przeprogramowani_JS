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
      throw new Error("not a number the input stuff");
    } catch (error) {
      console.log(error);
    }
  }

  const firstArray = [...`${first}`];
  const secondArray = [...`${second}`];
  let resss = "";
  for (let i = 0; firstArray[i] || secondArray[i]; i++) {
    if (firstArray[i]) {
      resss += firstArray[i];
    }
    if (secondArray[i]) {
      resss += secondArray[i];
    }
  }
  return resss;
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
