function palindrom(word): Boolean {
    let arrWord = word.split(' ');

    for (let value of arrWord) {
        let wordReversed = value.split('').reverse().join('');

        if (arrWord.includes(wordReversed)) {
            return true
        }
    }

    return false;
}

console.log(palindrom('ibu ratna antar ubi'));
console.log(palindrom('kasur ini rusak'));
console.log(palindrom('A nut for a jar of tuna.'));
console.log(palindrom('Borrow or rob?'));
console.log(palindrom('Was it a car or a cat I saw?'));
console.log(palindrom('Yo, banana boy!'));
console.log(palindrom('UFO tofu?'));
