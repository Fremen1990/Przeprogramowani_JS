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
    const LETTERS_IN_POLISH_ALPHABET = 32;
    const result = sentence.toLowerCase().match(/[a-ząćęłńóśźż]/g);
    const uniqueResultSize = new Set(result).size;
    const sentenceAsArray = Array.from(sentence);
    let repeatedCharacters = new Set();
    const charactersOfSentence = sentenceAsArray.map((el, index) => {
        if (sentenceAsArray.indexOf(el) !== index) {
            repeatedCharacters.add(el);
        }
    })
    console.log('Repeated: ');
    console.log(repeatedCharacters);
    return uniqueResultSize === LETTERS_IN_POLISH_ALPHABET;
}

/* Weryfikacja */

function verify(input, goal) {
    if (input === goal) {
        console.log('Gratulacje!');
    } else {
        console.log(`Niestety, oczekiwano - ${goal}, otrzymano - ${input}`);
    }
}

verify(isPangram('test'), false);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małżeństw!'), true);
verify(isPangram('Dość gróźb fuzją, klnę, pych i małże!'), false);