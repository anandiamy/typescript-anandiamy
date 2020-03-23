function combine(arr) {
    return arr.join(' ');
}
var first = ['Behind', 'every', 'great', 'man'];
var second = ['is', 'a', 'woman'];
var third = ['rolling', 'her', 'eyes'];
console.log(combine([].concat(first, second, third)));
