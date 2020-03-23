function range(start, end) {
    var ans = [];
    for (let i = start; i <= end; i++) {
        ans.push(i);
    }
    return ans;
}

function isPrime(num) {
    for(var i = 2; i < num; i++)
        if(num % i === 0) return false;
    return num > 1;
}

function playWithNumbers(firstNumber: Number, secondNumber: Number): object {
    let rangeNumbers = range(firstNumber, secondNumber);
    let even = [],
        odd = [],
        multiplesBy5 = [],
        primeNumbers = [],
        primeNumbersLessThan100 = []

    for (let number of rangeNumbers) {
        if (number % 2 === 0) {
            even.push(number);
        } else {
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
        even,
        odd,
        multiplesBy5,
        primeNumbers,
        primeNumbersLessThan100
    }
}

console.log(playWithNumbers(0, 1000))
