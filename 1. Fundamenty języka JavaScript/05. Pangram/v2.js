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
  const regex = /(?=.*a)(?=.*ą)(?=.*b)(?=.*c)(?=.*ć)(?=.*d)(?=.*e)(?=.*ę)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*ń)(?=.*o)(?=.*ó)(?=.*p)(?=.*r)(?=.*s)(?=.*ś)(?=.*t)(?=.*u)(?=.*w)(?=.*y)(?=.*z)(?=.*ź)(?=.*ż)./i;
  const result = regex.test(sentence);
  console.log(result);

  const sentenceArray = sentence.split("");
  const repeatedCharacters = [];
  sentenceArray.map((char, index) => {
    if (sentenceArray.indexOf(char) !== index) {
      repeatedCharacters.push(char);
    }
  });
  console.log(`Repeated characters: ${repeatedCharacters}`);
  return result;
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
