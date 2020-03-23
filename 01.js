function palindrom(word) {
    var arrWord = word.split(' ');
    for (var _i = 0, arrWord_1 = arrWord; _i < arrWord_1.length; _i++) {
        var value = arrWord_1[_i];
        var wordReversed = value.split('').reverse().join('');
        if (arrWord.includes(wordReversed)) {
            return true;
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
