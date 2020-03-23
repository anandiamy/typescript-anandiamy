function countWords(words) {
    var lowerCase = words.toLowerCase(), count = 1, search = ['aku', 'ingin', 'dapat'];
    for (var _i = 0, _a = lowerCase.split(' '); _i < _a.length; _i++) {
        var word = _a[_i];
        if (search.indexOf(word) > -1) {
            ++count;
        }
    }
    return count;
}
console.log(countWords('Aku ingin begini Aku ingin begitu Ingin ini itu banyak sekali\n' +
    '\n' +
    'Semua semua semua Dapat dikabulkan Dapat dikabulkan Dengan kantong ajaib\n' +
    '\n' +
    'Aku ingin terbang bebas Di angkasa Hei… baling baling bambu\n' +
    '\n' +
    'La... la... la... Aku sayang sekali Doraemon\n' +
    '\n' +
    'La... la... la... Aku sayang sekali'));
