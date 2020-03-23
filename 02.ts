function combine(arr: Array<string>): String {
    return arr.join(' ');
}

const first = ['Behind', 'every', 'great', 'man']
const second = ['is', 'a', 'woman']
const third = ['rolling', 'her', 'eyes']

console.log(combine([].concat(first, second, third)))
