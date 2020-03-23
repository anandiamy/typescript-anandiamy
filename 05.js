function range(start, end) {
    var ans = [];
    for (var i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}
function isPrime(num) {
    for (var i = 2; i < num; i++)
        if (num % i === 0)
            return false;
    return num > 1;
}
function playWithNumbers(firstNumber, secondNumber) {
    var rangeNumbers = range(firstNumber, secondNumber);
    var even = [], odd = [], multiplesBy5 = [], primeNumbers = [], primeNumbersLessThan100 = [];
    for (var _i = 0, rangeNumbers_1 = rangeNumbers; _i < rangeNumbers_1.length; _i++) {
        var number = rangeNumbers_1[_i];
        if (number % 2 === 0) {
            even.push(number);
        }
        else {
            odd.push(number);
        }
        if (number % 5 === 0) {
            multiplesBy5.push(number);
        }
        if (isPrime(number)) {
            primeNumbers.push(number);
        }
        if (isPrime(number) && number < 100) {
            primeNumbersLessThan100.push(number);
        }
    }
    return {
        even: even,
        odd: odd,
        multiplesBy5: multiplesBy5,
        primeNumbers: primeNumbers,
        primeNumbersLessThan100: primeNumbersLessThan100
    };
}
console.log(playWithNumbers(0, 1000));
