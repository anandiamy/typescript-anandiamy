function generateCensor(censoredWord) {
    var result = '';
    for (var word in censoredWord.split('')) {
        result += 'x';
    }
    return result;
}
function censoringWords(words) {
    var censoredWords = ['dolor', 'elit', 'quis', 'nisi', 'fugiat', 'proident', 'laborum'];
    for (var _i = 0, censoredWords_1 = censoredWords; _i < censoredWords_1.length; _i++) {
        var censoredWord = censoredWords_1[_i];
        words = words.replace(censoredWord, generateCensor(censoredWord));
    }
    return words;
}
console.log(censoringWords('Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.\n' +
    'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.\n' +
    'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.\n' +
    'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'));
