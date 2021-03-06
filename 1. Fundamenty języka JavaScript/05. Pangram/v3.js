/*
 * Opanuj JavaScript - Przeprogramowani.pl
 * I. Fundamenty języka JavaScript
 *
 * Ćwiczenie 5 - "Pangram"
 */

/*
 * Cel zadania
 *------------
 * Zaimplementuj funkcję, która sprawdzi, czy podany parametr to tzw. pangram.
 *
 * Pangram to możliwe do zrozumienia zdanie wykorzystujące wszystkie litery danego alfabetu.
 *
 *
 * Przykład:
 *
 * isPangram('test') // => false
 * isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!') // => true
 */

/*
 * Punkty dodatkowe
 *-----------------
 * Zweryfikuj, czy konkretna litera występuje w podanym zdaniu tylko jeden raz.
 */

function isPangram(sentence) {
  const repeatedCharacters = [];
  const sentenceArray = [...sentence];

  sentenceArray.map((character, index) => {
    if (sentenceArray.indexOf(character) !== index) {
      repeatedCharacters.push(character);
    }
  });
  console.log(`Repeated characters: ${repeatedCharacters}`);

  const alphabet = "aąbcćdeęfghijklłmnńoóprsśtuwyzźż";
  for (let i = 0; i < alphabet.length; i++) {
    if (!sentence.toLowerCase().includes(alphabet[i])) {
      return false;
    }
  }
  return true;
}
/* Weryfikacja */

function verify(input, goal) {
  if (input === goal) {
    console.log("Gratulacje!");
  } else {
    console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
  }
}

verify(isPangram("test"), false);
verify(isPangram("Dość gróźb fuzją, klnę, pych i małżeństw!"), true);
verify(isPangram("Dość gróźb fuzją, klnę, pych i małże!"), false);
